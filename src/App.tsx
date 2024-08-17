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
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");
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
          : removeSpaces(Cal.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(Cal.num + value)))
            : toLocaleString(Cal.num + value),
      res: !Cal.sign ? 0 : Cal.res,
    });
  };
  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCal({
      ...Cal,
      num: !value.toString().includes(".") ? Cal.num + value : Cal.num,
    });
  };
  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCal({
      ...Cal,
      sign: value,
      res: !Cal.num && Cal.res ? Cal.num : Cal.res,
      num: 0,
    });
  };
  const equalClickHandler = (e) => {
    e.preventDefault();
    if (Cal.num && Cal.sign) {
      const calculation = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
            ? a - b
            : sign === "X"
              ? a * b
              : a / b;
      setCal({
        ...Cal,
        res:
          Cal.num === 0 && Cal.sign === "/"
            ? 404
            : toLocaleString(
                calculation(
                  Number(removeSpaces(Cal.res)),
                  Number(removeSpaces(Cal.num)),
                  Cal.sign,
                ),
              ),
        sign: "",
        num: 0,
      });
    }
  };
  const invertClickHandler = () => {
    setCal({
      ...Cal,
      num: Cal.num ? Cal.num * -1 : 0,
      res: Cal.res ? Cal.res * -1 : 0,
      sign: " ",
    });
  };
  const percentClickHandler = () => {
    let num = Cal.num ? Cal.num : 0;
    let res = Cal.res ? Cal.res : 0;
    setCal({
      ...Cal,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };
  const resetClickHandler = () => {
    setCal({
      ...Cal,
      sign: "",
      num: 0,
      res: 0,
    });
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
                onClick={
                  btn === "C"
                    ? resetClickHandler
                    : btn === "+-"
                      ? invertClickHandler
                      : btn === "%"
                        ? percentClickHandler
                        : btn === "+" ||
                            btn === "-" ||
                            btn === "X" ||
                            btn === "/"
                          ? signClickHandler
                          : btn === "."
                            ? commaClickHandler
                            : btn === "="
                              ? equalClickHandler
                              : numClickHandler
                }
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
