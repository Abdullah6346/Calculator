import "./App.css";

function App() {
  return (
    <>
      <section>
        <div id="calculator">
          <div className="outputscreen" 
          ></div>
          <div className="buttonbox">
            <button id="clear">AC</button>
            <button id="equal">=</button>
            <button className="" id="zero">
              0
            </button>
            <button className="" id="one">
              1
            </button>
            <button className="" id="two">
              2
            </button>
            <button className="" id="three">
              3
            </button>
            <button className="" id="four">
              4
            </button>
            <button className="" id="five">
              5
            </button>
            <button className="" id="six">
              6
            </button>
            <button className="" id="seven">
              7
            </button>
            <button className="" id="eight">
              8
            </button>
            <button className="" id="nine">
              9
            </button>
            <button id="decimal">.</button>
            <button className="" id="add">
              +
            </button>
            <button className="" id="subtract">
              -
            </button>
            <button className="" id="multiply">
              ×
            </button>
            <button className="" id="divide">
              ÷
            </button>
          </div>
         </div>
      </section>
    </>
  );
}

export default App;
