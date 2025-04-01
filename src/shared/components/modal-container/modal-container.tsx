import { ReactNode } from 'react';

import { usePreventScrollWhileModal } from '@shared/hooks/use-prevent-scroll-while-modal';

import * as styles from './modal-container.css';

interface ModalContainerProps {
  children: ReactNode;
  onClose: () => void;
}

export const ModalContainer = ({ children, onClose }: ModalContainerProps) => {
  usePreventScrollWhileModal();

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
