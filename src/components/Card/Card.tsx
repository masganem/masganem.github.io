import * as styles from "./styles";

interface CardProps {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps & React.HTMLProps<HTMLDivElement>> = ({className, ...props}) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {props.children}
    </div>
  );
};