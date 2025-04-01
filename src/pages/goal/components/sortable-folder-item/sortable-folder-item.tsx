import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import FolderItem, { FolderItemProps } from '../folder-item/folder-item';
import type { CSSProperties } from 'react';

interface SortableFolderItemProps extends FolderItemProps {
  id: string;
}

export default function SortableFolderItem({
  id,
  ...props
}: SortableFolderItemProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    visibility: isDragging ? 'hidden' : 'visible',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <FolderItem {...props} />
    </div>
  );
}
