export const Link: React.FC<{children: React.ReactNode} & React.HTMLProps<HTMLAnchorElement>> = ({ children, ...props }) => {
  return (
    <a {...props} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}