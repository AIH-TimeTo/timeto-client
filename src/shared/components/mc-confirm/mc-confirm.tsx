import { usePreventScrollWhileModal } from '@shared/hooks/use-prevent-scroll-while-modal';

import * as styles from './mc-confirm.css';

interface McConfirmProps {
  title: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
  confirmColor?: 'blue';
}

export default function McConfirm({
  title,
  description,
  cancelLabel = '취소',
  confirmLabel = '확인',
  onCancel,
  onConfirm,
  confirmColor,
}: McConfirmProps) {
  usePreventScrollWhileModal();

  return (
    <div className={styles.backdrop} onClick={onCancel}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={onCancel}>
            {cancelLabel}
          </button>
          <button
            className={styles.confirmButton({ color: confirmColor })}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
