const Button = ({ className, value, onClick }) => {
  return (
    <button
      className={`bg-custombuttoncolor hover:bg-buttonhover cursor-pointer rounded-lg border-none text-xl font-bold text-[#ffffff] ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
