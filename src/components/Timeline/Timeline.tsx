import * as styles from "./styles";
import { Children, useState } from "react";
import { TimelineItem } from "./TimelineItem";
import { TimelineIndex } from "./TimelineIndex";

interface TimelineProps {
  children: React.ReactElement[];
  selected: number;
  setSelected: (i: number) => void;
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  selected,
  setSelected
}) => {
  const MIN_SWIPE_DISTANCE = 60;

  const childrenCount = Children.count(children);
  const [lastTouchX, setlastTouchX] = useState<number | undefined>(undefined);
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchX = e.changedTouches[0].pageX;
    setlastTouchX(touchX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchX = e.changedTouches[0].pageX;
    if (lastTouchX !== undefined) {
      const swipeDistance = touchX - lastTouchX;
      if (swipeDistance < (-1)*MIN_SWIPE_DISTANCE) {
        setSelected(selected+1);
      } else if (swipeDistance > MIN_SWIPE_DISTANCE) {
        setSelected(selected-1);
      }
    }
    setlastTouchX(touchX);
  };

  return (
    <div className={styles.timeline}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    > 
      <div className={styles.indexes}>
        {children.map((_, index) => 
          <TimelineIndex
            key={index}
            index={index}
            currentIndex={selected}
            length={childrenCount}
            onClick={() => setSelected(index)}  
          />)
        }
      </div>
      <div className={styles.horizontalCarousel}>
        {children.map((child, index) => (
          <TimelineItem
            index={index}
            currentIndex={selected}
            length={childrenCount}
            content={child}
            onClick={() => setSelected(index)}  
          />
        ))}
      </div>
    </div>
  );
};