import { Textfit } from "react-textfit";

interface Screen {
  value: number;
}
const Screen: React.FC<Screen> = ({ value }) => {
  return (
    <Textfit
      mode="single"
      className="screen text-white mb-2 box-border flex h-24 w-full content-center items-center justify-end bg-[#4357692d] px-10 py-0 font-bold"
      id="display"
    >
      {value}
    </Textfit>
  );
};

export default Screen;
