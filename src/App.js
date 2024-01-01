import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const handleButtonClick = (input) => {
    // Handle button click logic here
    if (input === "=") {
      // Perform calculation when "=" is clicked
      if (value.trim() === "") {
        setResult("Error");
      } else {
        try {
          const result = eval(value); // Using JavaScript's eval function to evaluate the expression
          // setValue(result);
          setResult(result);
        } catch (error) {
          // Handle errors such as syntax errors
          setValue("Error");
        }
      }
    } else if (input === "C") {
      // Clear the input when "C" (Clear) is clicked
      setValue("");
      setResult("");
    } else {
      // Concatenate input values for the expression
      setValue((prevValue) => prevValue + input);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className={value == "" ? "" : "input-box"}>{value}</div>
      <div className="output-box">{result}</div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("7")} className="button">
          7
        </button>
        <button onClick={() => handleButtonClick("9")} className="button">
          9
        </button>
        <button onClick={() => handleButtonClick("8")} className="button">
          8
        </button>
        <button onClick={() => handleButtonClick("+")} className="button">
          +
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("4")} className="button">
          4
        </button>
        <button onClick={() => handleButtonClick("5")} className="button">
          5
        </button>
        <button onClick={() => handleButtonClick("6")} className="button">
          6
        </button>
        <button onClick={() => handleButtonClick("-")} className="button">
          -
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("1")} className="button">
          1
        </button>
        <button onClick={() => handleButtonClick("2")} className="button">
          2
        </button>
        <button onClick={() => handleButtonClick("3")} className="button">
          3
        </button>
        <button onClick={() => handleButtonClick("*")} className="button">
          *
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("C")} className="button">
          C
        </button>
        <button onClick={() => handleButtonClick("0")} className="button">
          0
        </button>
        <button onClick={() => handleButtonClick("=")} className="button">
          =
        </button>
        <button onClick={() => handleButtonClick("/")} className="button">
          /
        </button>
      </div>
    </div>
  );
}
