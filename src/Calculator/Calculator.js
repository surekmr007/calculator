import React, { useState } from "react";
import "../App.css";
const Calculator = () => {
  // const createDigits = () => {
  //   const digits = [];

  //   for (let i = 0; i < 10; i++) {
  //     digits.push(
  //       <button onClick={(i)=>onButton} key={i}>
  //         {i}
  //       </button>
  //     );
  //   }
  //   return digits;
  // };
  const [result, setResult] = useState("");
  const onButton = (props) => {
    setResult(result.concat(props.target.name));
  };
  const onResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };
  const onBackspace = () => {
  setResult(result.slice(0, result.length - 1));
  };
  const onClear = () => {
  setResult("");
  };

  return (
    <div className="app">
      <div className="calculator">
        <form>
          <div className="display">
       <span>
              {/* <input type="text" defaultValue={result}></input> */}
            </span> {result || '0'}
          </div>
        </form>
        <div className="operators">
          <button name="-" onClick={onButton}>
            -
          </button>
          <button name="/" onClick={onButton}>
            /
          </button>
          <button name="*" onClick={onButton}>
            &
          </button>
          <button name="+" onClick={onButton}>
            +
          </button>
          <button onClick={onClear}>clear</button>
          <button onClick={onBackspace}>C</button>
        </div>
        <div className="digits">
          <button name="1" onClick={onButton}>
            1
          </button>
          <button name="2" onClick={onButton}>
            2
          </button>
          <button name="3" onClick={onButton}>
            3
          </button>
          <button name="4" onClick={onButton}>
            4
          </button>
          <button name="5" onClick={onButton}>
            5
          </button>
          <button name="6" onClick={onButton}>
            6
          </button>
          <button name="7" onClick={onButton}>
            7
          </button>
          <button name="8" onClick={onButton}>
            8
          </button>
          <button name="9" onClick={onButton}>
            9
          </button>
          <button name="0" onClick={onButton}>
            0
          </button>
          <button name="." onClick={onButton}>
            .
          </button>
          <button id="result" onClick={onResult}>
            Result
          </button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
