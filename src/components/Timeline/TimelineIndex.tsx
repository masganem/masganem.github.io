import * as styles from "./styles";

interface TimelineIndexProps {
  index: number;
  currentIndex: number;
  length: number;
  onClick: () => void;
}

export const TimelineIndex: React.FC<TimelineIndexProps> = ({index, currentIndex, length, onClick}) => {
  const isActive = index === currentIndex;

  return (
    <div className={`${styles.shiftItem(index, currentIndex, length)} ${styles.indexConnection(index, length)}`}>
      <div className={styles.index(isActive)} onClick={onClick}>
      </div>
    </div>
  );
}