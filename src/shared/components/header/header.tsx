import { ReactNode } from 'react';

import * as styles from './header.css';

interface HeaderProps {
  leftSlot?: ReactNode;
  centerSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export default function Header({
  leftSlot,
  centerSlot,
  rightSlot,
}: HeaderProps) {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.left}>{leftSlot}</div>
      <div className={styles.center}>{centerSlot}</div>
      <div className={styles.right}>{rightSlot}</div>
    </header>
  );
}
