import { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  type DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import SortableFolderItem from '../sortable-folder-item/sortable-folder-item';
import FolderItem from '../folder-item/folder-item';
import * as styles from './goal-group.css';
import { IcGoalPinFill, IcCommonKebab } from '@shared/assets/svgs';
import { FolderColorType, Folder } from '../../types/goal';
import { clsx } from 'clsx';

interface GoalGroupProps {
  goalName: string;
  color: FolderColorType;
  folders: Folder[];
}

export default function GoalGroup({
  goalName,
  color,
  folders,
}: GoalGroupProps) {
  const [items, setItems] = useState(folders);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === Number(active.id));
      const newIndex = items.findIndex((item) => item.id === Number(over?.id));
      setItems(arrayMove(items, oldIndex, newIndex));
    }
    setActiveId(null);
    setIsDragging(false);
  };

  return (
    <section className={styles.goalGroupWrapper}>
      <header className={styles.goalGroupHeader}>
        <div className={styles.pinWithTitle}>
          <IcGoalPinFill
            width={24}
            height={24}
            className={styles.fontColorMap[color]}
          />
          <h2 className={styles.title}>{goalName}</h2>
        </div>
        <IcCommonKebab className={styles.kebabIcon} width={20} height={20} />
      </header>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={({ active }) => {
          setActiveId(active.id as string);
          setIsDragging(true);
        }}
        onDragEnd={handleDragEnd}
        onDragCancel={() => {
          setActiveId(null);
          setIsDragging(false);
        }}
      >
        <SortableContext
          items={items.map((i) => i.id.toString())}
          strategy={verticalListSortingStrategy}
        >
          <div
            className={clsx(
              isDragging ? styles.folderListDragging : styles.folderList,
            )}
          >
            {items.map((folder, index) => (
              <SortableFolderItem
                key={folder.id}
                id={folder.id.toString()}
                folderName={folder.folderName}
                taskCount={folder.taskCount}
                color={folder.color}
                isOnly={items.length === 1}
                isFirst={index === 0}
                isLast={index === items.length - 1}
              />
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <div
              style={{
                transform: 'scale(1.02)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '1rem',
              }}
            >
              <FolderItem
                {...items.find((item) => item.id.toString() === activeId)!}
                isOverlay
                isOnly={false}
                isFirst={false}
                isLast={false}
              />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </section>
  );
}
