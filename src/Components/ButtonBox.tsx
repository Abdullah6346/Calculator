import { ReactNode } from "react";

interface ButtonBox {
  children: ReactNode;
}

const ButtonBox: React.FC<ButtonBox> = ({ children }) => {
  return (
    <div
      id="buttonbox"
      className="button-cotainer grid h-[calc(100%-110px)] grid-cols-4 grid-rows-5 gap-2"
    >
      {children}
    </div>
  );
};

export default ButtonBox;
