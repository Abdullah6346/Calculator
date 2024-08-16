import "./App.css";
import Button from "./Components/Button";
import Wrapper from "./Components/Wrapper";
import ButtonBox from "./Components/ButtonBox";
import Screen from "./Components/Screen";
function App() {
  const btnnvalues: array = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];
  return (
    <>
      <Wrapper>
        <Screen value={0} />
        <ButtonBox>
          {btnnvalues.flat().map((btn, i: number) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                onClick={console.log(`${btn} ia clicked`)}
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
