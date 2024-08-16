const Wrapper = ({ children }) => {
  return (
    <div id="calculator" className="h-96 w-80 rounded-lg bg-[#485461]">
      {children}
    </div>
  );
};

export default Wrapper;
