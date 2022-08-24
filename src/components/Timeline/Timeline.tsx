import * as styles from "./styles";
import { Children, useState } from "react";
import { TimelineItem } from "./TimelineItem";
import { TimelineIndex } from "./TimelineIndex";

interface TimelineProps {
  children: React.ReactElement[];
}

export const Timeline: React.FC<TimelineProps> = ({children}) => {
  const childrenCount = Children.count(children);
  const [activeIndex, setActiveIndex] = useState(childrenCount-1);

  return (
    <div className={styles.timeline}>
      <div className={styles.indexes}>
        {children.map((_, index) => 
          <TimelineIndex
            key={index}
            index={index}
            currentIndex={activeIndex}
            length={childrenCount}
            onClick={() => setActiveIndex(index)}  
          />)
        }
      </div>
      <div className={styles.horizontalCarousel}>
        {children.map((child, index) => (
          <TimelineItem
            index={index}
            currentIndex={activeIndex}
            length={childrenCount}
            content={child}
            onClick={() => setActiveIndex(index)}  
          />
        ))}
      </div>
    </div>
  );
};