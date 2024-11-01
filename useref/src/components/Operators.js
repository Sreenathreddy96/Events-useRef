import React from "react";

function Operators() {
  let score = 0;
  return (
    <div>
      <button
        onClick={() => {
          let a = 20 + 35 + 50 + 3;
          console.log(a);
        }}
      >
        Arithemetic Operators
      </button>
      <button
        onClick={() => {
          score++;
          console.log(score);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          score--;
          console.log(score);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          let a = 33 % 5;
          console.log(a);
        }}
      >
        Modulus
      </button>
      <button
        onClick={() => {
          let a = 50;
          a += 15;
          a -= 20;
          a *= 5;
          alert(`Assignment Opeator values are ${a}`);
          console.log(a);
        }}
      >
        Assignment Opeators
      </button>
      <button
        onClick={() => {
          let marks = 50;

          console.log(marks >= 40);
          console.log(marks <= 40);
          console.log(marks == 50);
          console.log(marks >= 35);
          console.log(marks != 40);
          console.log(marks < 100);
          console.log(marks > 20);
        }}
      >
        Comparison Operators
      </button>
    </div>
  );
}

export default Operators;
