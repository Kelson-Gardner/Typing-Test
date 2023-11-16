import "./Text.css";
import React, { useRef } from "react";

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const textArray = text.split("");
console.log(textArray);
var inputText = document.getElementById("text-input");
var inputArray = [];

function handleKeyPress(event) {
  if (event.key === " ") {
    return;
  }

  inputText = document.getElementById("text-input").innerHTML;
  inputArray = inputText.split("");
  if (inputArray[inputArray.length - 1] === ";") {
    return;
  }
  let isWrong = false;
  var wrongCount = 1;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== textArray[i]) {
      isWrong = true;
      wrongCount++;
      console.log(wrongCount);
    }
  }
  if (isWrong === false) {
    wrongCount = 0;
  }
}

function Text() {
  return (
    <div>
      <div id="container">
        <div id="text">{textArray}</div>
      </div>
      <div
        id="text-input"
        contentEditable="true"
        onKeyPress={handleKeyPress}
      ></div>
    </div>
  );
}

export default Text;
