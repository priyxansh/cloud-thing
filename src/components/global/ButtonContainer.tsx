type ButtonContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const ButtonContainer = ({ children, className }: ButtonContainerProps) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonContainer;
