import * as styles from "./styles";

interface TimelineItemProps {
  index: number;
  currentIndex: number;
  length: number;
  content: React.ReactElement;
  onClick: () => void;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({index, currentIndex, length, content, onClick}) => {
  const isActive = index === currentIndex;
  return (
    <div className={`${styles.shiftItem(index, currentIndex, length)} ${styles.mobileCardShift(currentIndex)}`}>
      <div className={styles.horizontalCarouselItem(isActive)} onClick={onClick}>
        {content}
      </div>
    </div>
  );
}