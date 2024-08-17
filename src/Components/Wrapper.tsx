import { ReactNode } from "react";

interface Wrapper {
  children: ReactNode;
}
const Wrapper: React.FC<Wrapper> = ({ children }) => {
  return (
    <div id="calculator" className="h-96 w-80 rounded-lg bg-[#485461]">
      {children}
    </div>
  );
};

export default Wrapper;
