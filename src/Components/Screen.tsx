import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
  return (
    <Textfit
      mode="single"
      className="screen mb-2 box-border flex h-24 w-full content-center items-center bg-[#4357692d] px-10 py-0 font-bold text-white"
      id="display"
    >
      {value}
    </Textfit>
  );
};

export default Screen;
