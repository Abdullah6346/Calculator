import "./Button.css";
interface Button {
  className?: string;
  value: React.ReactNode;
  onClick: () => void;
}
const Button: React.FC<Button> = ({ className = "", value, onClick }) => {
  return (
    <button
      className={`cursor-pointer rounded-lg border-none bg-custombuttoncolor text-xl font-bold text-[#ffffff] hover:bg-buttonhover ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
