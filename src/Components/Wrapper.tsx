const Wrapper = ({ children }) => {
  return (
    <div id="calculator" className="w-96 h-96 rounded-lg bg-[#485461]">
      {children}
    </div>
  );
};

export default Wrapper;
