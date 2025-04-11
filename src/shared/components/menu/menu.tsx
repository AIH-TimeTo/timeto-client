import { IcMenuClose } from '@shared/assets/svgs';
import { routePath } from '@shared/constants/path';
import { useNavigateWithClose } from '@shared/hooks/use-navigate-with-close';
import { usePreventScrollWhileModal } from '@shared/hooks/use-prevent-scroll-while-modal';
import { useUserInfo } from '@shared/hooks/use-user-info';

import * as styles from './menu.css';

interface MenuModalProps {
  onClose: () => void;
}

export default function MenuModal({ onClose }: MenuModalProps) {
  usePreventScrollWhileModal();

  const { data: user } = useUserInfo();
  const navigateWithClose = useNavigateWithClose(onClose);

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={onClose}>
        <IcMenuClose width={24} height={24} />
      </button>

      <div>
        <div className={styles.userInfo}>
          <p className={styles.nickname}>{user?.data.userName}</p>
          <p className={styles.email}>{user?.data.userEmail}</p>
        </div>

        <div className={styles.menuList}>
          <button
            className={styles.menuButton}
            onClick={() => navigateWithClose(routePath.GOAL)}
          >
            내 목표
          </button>
          <button
            className={styles.menuButton}
            onClick={() => navigateWithClose('/timetable')}
          >
            타임 블록
          </button>
          <button
            className={styles.menuButton}
            onClick={() => navigateWithClose('/diary')}
          >
            내 일지
          </button>
        </div>
      </div>

      <div className={styles.bottomMenu}>
        <button className={styles.bottomButton}>로그아웃</button>
        <button className={`${styles.bottomButton} ${styles.danger}`}>
          회원탈퇴
        </button>
      </div>
    </div>
  );
}
