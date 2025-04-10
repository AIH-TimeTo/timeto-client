import { useEffect, useRef, useState } from 'react';

import * as styles from './scroll-picker.css';

interface McScrollPickerProps {
  items: number[];
  selected: number;
  onChange: (value: number) => void;
  unit?: string;
}

export default function McScrollPicker({
  items,
  selected,
  onChange,
  unit,
}: McScrollPickerProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const itemHeight = 40;
  const visibleItems = 3; // 보이는 항목 수
  const centeredIndex = Math.floor(visibleItems / 2); // 중앙 인덱스

  // 스크롤이 멈추면 가장 가까운 항목으로 스냅
  const handleScrollEnd = () => {
    if (!listRef.current) return;

    const scrollTop = listRef.current.scrollTop;
    const index = Math.round(scrollTop / itemHeight);
    const value = items[index];

    if (value !== undefined && value !== selected) {
      onChange(value);
    }

    // 스냅 애니메이션
    listRef.current.scrollTo({
      top: index * itemHeight,
      behavior: 'smooth',
    });
  };

  // 스크롤 이벤트에 디바운스 적용
  const handleScroll = () => {
    if (isDragging) return;

    // 이전 타이머 제거
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    // 새 타이머 설정
    timeoutRef.current = window.setTimeout(handleScrollEnd, 150);
  };

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // 터치 이벤트 처리
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    handleScrollEnd();
  };

  // 초기 선택값 스크롤 위치 맞추기
  useEffect(() => {
    const index = items.findIndex((item) => item === selected);
    if (listRef.current && index >= 0) {
      listRef.current.scrollTop = index * itemHeight;
    }
  }, []);

  // 현재 선택된 항목이 변경되면 스크롤 위치 업데이트
  useEffect(() => {
    const index = items.indexOf(selected);
    if (listRef.current && index >= 0 && !isDragging) {
      listRef.current.scrollTo({
        top: index * itemHeight,
        behavior: 'smooth',
      });
    }
  }, [selected]);

  return (
    <div className={styles.scrollContainer}>
      <ul
        className={styles.list}
        ref={listRef}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onMouseLeave={() => setIsDragging(false)}
      >
        {/* 상단 패딩 */}
        {Array(centeredIndex)
          .fill(null)
          .map((_, idx) => (
            <li key={`top-padding-${idx}`} className={styles.item}></li>
          ))}

        {/* 실제 선택 가능한 항목들 */}
        {items.map((item, idx) => {
          const isSelected = item === selected;
          return (
            <li
              key={`item-${idx}`}
              className={`${styles.item} ${isSelected ? styles.selected : ''}`}
            >
              {`${item.toString().padStart(2, '0')} ${unit || ''}`}
            </li>
          );
        })}

        {/* 하단 패딩 */}
        {Array(centeredIndex)
          .fill(null)
          .map((_, idx) => (
            <li key={`bottom-padding-${idx}`} className={styles.item}></li>
          ))}
      </ul>
    </div>
  );
}
