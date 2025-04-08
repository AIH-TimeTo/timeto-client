import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clsx } from 'clsx';

import {
  deleteGoal,
  editGoalColor,
  editGoalName,
} from '@shared/apis/goal/goal';
import { IcCommonKebab, IcGoalPinFill } from '@shared/assets/svgs';
import { usePreventScrollWhileDragging } from '@shared/hooks/use-prevent-scroll-while-dragging';
import { gfColorMap } from '@shared/utils/color-map';

import { useGoalOptionModal } from '../../hooks/use-goal-option-modal';
import { Folder, FolderColorType } from '../../types/goal';
import FolderItem from '../folder-item/folder-item';
import GoalDeleteModal from '../goal-delete-modal/goal-delete-modal';
import GoalColorEditModal from '../goal-edit-color-modal.tsx/goal-edit-color-modal';
import GoalNameEditModal from '../goal-edit-name-modal/goal-edit-name-modal';
import GoalOptionModal from '../goal-option-modal/goal-option-modal';
import SortableFolderItem from '../sortable-folder-item/sortable-folder-item';

import * as styles from './goal-group.css';

interface GoalGroupProps {
  goalId: number;
  goalName: string;
  color: FolderColorType;
  folders: Folder[];
}

export default function GoalGroup({
  goalId,
  goalName,
  color,
  folders,
}: GoalGroupProps) {
  const [items, setItems] = useState(folders);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedColor, setSelectedColor] = useState<FolderColorType>(color);

  const navigate = useNavigate();

  const {
    modalStep,
    selectedGoalId,
    selectedGoalName,
    openOptionModal,
    openEditNameModal,
    openEditColorModal,
    openDeleteModal,
    closeModal,
    goBack,
    setSelectedGoalName,
  } = useGoalOptionModal();

  const queryClient = useQueryClient();

  const { mutate: updateNameMutate } = useMutation({
    mutationFn: editGoalName,
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      setSelectedGoalName(data.data.goalName);
      closeModal();
    },
    onError: (err) => {
      console.error('이름 변경 실패', err);
    },
  });

  const { mutate: updateColorMutate } = useMutation({
    mutationFn: editGoalColor,
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      setSelectedColor(data.data.color as FolderColorType);
      closeModal();
    },
    onError: (err) => {
      console.error('색상 변경 실패', err);
    },
  });

  const { mutate: deleteGoalMutate } = useMutation({
    mutationFn: deleteGoal,
    onSuccess: () => {
      queryClient.invalidateQueries();
      closeModal();
    },
    onError: (err) => {
      console.error('삭제 실패', err);
    },
  });

  useEffect(() => {
    setItems(folders);
    setSelectedColor(color);
  }, [folders, color]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 300,
        tolerance: 5,
      },
    }),
  );

  usePreventScrollWhileDragging(isDragging);

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
            style={{ color: gfColorMap[selectedColor] }}
          />
          <h2 className={styles.title}>{goalName}</h2>
        </div>
        <IcCommonKebab
          className={styles.kebabIcon}
          width={20}
          height={20}
          onClick={() => openOptionModal(goalId, goalName, color)}
        />
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
                color={selectedColor}
                isOnly={items.length === 1}
                isFirst={index === 0}
                isLast={index === items.length - 1}
                onClick={() => navigate(`/folder/${folder.id}`)}
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
                color={selectedColor}
              />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* 옵션 모달 */}
      {modalStep === 'option' && selectedGoalId === goalId && (
        <GoalOptionModal
          goalName={selectedGoalName}
          onClose={closeModal}
          onClickRename={openEditNameModal}
          onClickChangeColor={openEditColorModal}
          onClickDelete={openDeleteModal}
        />
      )}

      {/* 이름 변경 모달 */}
      {modalStep === 'edit-name' && selectedGoalId === goalId && (
        <GoalNameEditModal
          defaultName={selectedGoalName}
          onClose={closeModal}
          onBack={goBack}
          onConfirm={(newName) => {
            updateNameMutate({
              goalId,
              goalName: newName,
            });
          }}
        />
      )}

      {/* 색상 변경 모달 */}
      {modalStep === 'edit-color' && selectedGoalId === goalId && (
        <GoalColorEditModal
          defaultColor={selectedColor}
          onClose={closeModal}
          onBack={goBack}
          onConfirm={(newColor) => {
            updateColorMutate({
              goalId,
              color: newColor,
            });
          }}
        />
      )}

      {/* 삭제 확인 모달 */}
      {modalStep === 'delete' && selectedGoalId === goalId && (
        <GoalDeleteModal
          onClose={closeModal}
          onConfirm={() => {
            deleteGoalMutate(goalId);
          }}
        />
      )}
    </section>
  );
}
