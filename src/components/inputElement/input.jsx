"use client"

import React, { useState, useRef,  } from "react";
import { useParams } from "next/navigation";
import "./input.css";

export default function Input({ name, credit, id }) {
  const [isActive, setIsActive] = useState(id === 0);
  const inputRef = useRef(null);


  const {lang} = useParams();
 
  const handleInput = (e) => {
    // Define the regular expression pattern
    const rgx = /^([0-9]|1[0-9])\.?5?$|20$/;

    if (
      e.target.value.slice(e.target.value.length - 2) == ".." ||
      !rgx.test(e.target.value)
    ) {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkingFunc(e.currentTarget);
    }
  };

  const handleBlur = (e) => {
    checkingFunc(e.target);
  };

  const checkingFunc = (e) => {
    const value = e.value;
    const rgx = /^([0-9]|1[0-9])\.?5?$|20$/;
    const currentInput = document.getElementById(`input-${id}`);
    const nextInput = document.getElementById(`input-${id + 1}`);

    if (rgx.test(value) && value.slice(value.length - 1) !== ".") {
      currentInput.classList.remove("notchecked");
      currentInput.classList.add("checked");

      if (nextInput) {
        nextInput.disabled = false;
        nextInput.focus();
      }
    } else {
      currentInput.classList.remove("checked");
      currentInput.classList.add("notchecked");

    }
  };
  
   


 
 

  return (
    <div className="model-input">
      <label  htmlFor={name} style={lang == "ar" ? {direction : 'rtl'} : {direction : "ltr"} }> {name} </label>
      <input
        ref={inputRef}
        disabled={!isActive}
        id={`input-${id}`}
        type="text"
        data-custom={credit}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onInput={handleInput}
      />
    </div>
  );
}
