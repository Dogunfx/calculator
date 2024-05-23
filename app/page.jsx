"use client";
import { useState } from "react";

export default function Calculator() {
  var [result, setResult] = useState("");

  function doNumber(evt) {
    result += evt.target.innerHTML;
    setResult(result);
  }

  function doClear() {
    result = "";
    setResult(result);
  }

  function doEva() {
    result = eval(result);
    setResult(result);
  }

  return (
    <main>
      <h1>My Calculator</h1>
      <p> {result}</p>
      <button onClick={doNumber}>1</button>
      <button onClick={doNumber}>2</button>
      <button onClick={doNumber}>3</button>
      <button onClick={doNumber}>4</button>
      <button onClick={doNumber}>5</button>
      <button onClick={doNumber}>6</button>
      <button onClick={doNumber}>7</button>
      <button onClick={doNumber}>8</button>
      <button onClick={doNumber}>9</button>
      <button onClick={doNumber}>0</button>
      <button onClick={doNumber}>+</button>
      <button onClick={doNumber}>-</button>
      <button onClick={doNumber}>/</button>
      <button onClick={doNumber}>*</button>
      <button onClick={doEva}>=</button>

      <button onClick={doClear}>clear</button>
    </main>
  );
}
