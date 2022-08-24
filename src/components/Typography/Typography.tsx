import * as styles from './styles';

interface TypographyProps {
  children: React.ReactNode;
}

const styledTypography = (styling: string) => {
  const Typography: React.FC<TypographyProps> = ({children}) => (
    <div className={styling}>
      {children}
    </div>
  );

  return Typography;
}

export const BaseText = styledTypography(styles.baseText);
export const Small = styledTypography(styles.small);
export const Heading = styledTypography(styles.heading);


