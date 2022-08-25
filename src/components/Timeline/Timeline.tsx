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
  const childrenCount = Children.count(children);

  return (
    <div className={styles.timeline}>
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