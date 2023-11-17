import "./Text.css";
import React, { useState } from "react";

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const textArray = text.split(" ");

var inputArray = [];

function Text() {
  const [count, setCount] = useState(0);
  const [wrong, setWrong] = useState(0);
  var inputText = document.getElementById("text-input");
  function handleKeyPress(event) {
    var wrongCount = 0;

    if (event.nativeEvent.data === " ") {
      setCount(count + 1);
      inputText = document.getElementById("text-input");
      inputArray = inputText.innerText.split("");
      inputArray.pop();
      var word = textArray[count].split("");

      if (inputArray.length < word.length) {
        wrongCount += word.length - inputArray.length;
      }
      for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== word[i]) {
          wrongCount++;
        }
      }
      inputText.innerHTML = "";
      event.preventDefault();
    }

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] !== word[i]) {
      }
    }

    console.log(inputArray);
    console.log(word);

    setWrong(wrong + wrongCount);
  }
  console.log(inputArray);
  return (
    <div>
      <div id="container">
        <div id="text">{textArray[count]}</div>
      </div>
      <div
        id="text-input"
        contentEditable="true"
        onInput={handleKeyPress}
      ></div>
      <div id="wrong-count">Total Mistakes: {wrong}</div>
    </div>
  );
}

export default Text;
