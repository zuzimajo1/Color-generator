import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Values from "values.js";
import { SingleButtons } from './buttons'

const App = () => {
  const Default = new Values(`#4da64d`).all(10);
  const [Value, SetValue] = useState("");
  const [Error, SetError] = useState(false);
  const [List, SetList] = useState(Default);
  
  const SubmitButton = (e) => {
    e.preventDefault();
    console.log(Value);
    try {
      const color = new Values(Value).all(10);
      SetList(color);
      SetError(false);
    } catch (error) {
      SetError(true);
    }
  };

  return (
    <main>
      <div className="main">
        <div className="firstwrapper">
          <h2>Color Generator</h2>
          <div className='form'>
            <input
              className={`input ${Error && `inputError`}`}
              placeholder="#4da64d"
              type="text"
              value={Value}
              onChange={(e) => SetValue(e.target.value)}
            ></input>
            <button
              className="buttonsubmit"
              type="button"
              onClick={SubmitButton}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="secondwrapper">
          {List.map((items, index) => {
            console.log(index);
            return (
              <SingleButtons
                key={index}
                {...items}
                index={index}
                hexcolor={items.hex}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
