import "./App.css";
import { useState } from "react";
import Button from "./Components/Button";
import Wrapper from "./Components/Wrapper";
import ButtonBox from "./Components/ButtonBox";
import Screen from "./Components/Screen";
const btnnvalues = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "X"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];
function App() {
  const [Cal, setCal] = useState({
    sign: "",
    res: 0,
    num: 0,
  });
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCal({
      ...Cal,
      num:
        Cal.num === 0 && value === "0"
          ? "0"
          : Cal.num % 1 === 0
            ? Number(Cal.num + value)
            : Cal.num + value,
      res: !Cal.sign ? 0 : Cal.res,
    });
  };

  const handleOnClick = (btn: string) => {
    btn === "C"
      ? clearClickHandler
      : btn === "+-"
        ? invertClickHandler
        : btn === "%"
          ? percentClickHandler
          : btn === "+" || btn === "-" || btn === "X" || btn === "/"
            ? signClickHandler
            : btn === "."
              ? commaClickHandler
              : btn === "="
                ? equalClickHandler
                : numClickHandler;
  };
  return (
    <>
      <Wrapper>
        <Screen value={Cal.num ? Cal.num : Cal.res} />
        <ButtonBox>
          {btnnvalues.flat().map((btn, i: number) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                onClick={handleOnClick}
                value={btn}
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
    </>
  );
}

export default App;
