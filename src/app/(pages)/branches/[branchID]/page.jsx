"use client";
import { useParams } from "next/navigation";
import React, { useContext } from "react";
import { subjectsData } from "../../data";
import Input from "@/components/inputElement/input";

import "./page.css";
import Link from "next/link";
import { resultContext } from "@/app/context/resultContext";

export default function SubjectPage() {
  const branchName = useParams().branchID.split("%20").join(" ");
  const {setResult} = useContext(resultContext);
  const handleclick = (e) => {
    const allInputs = document.querySelectorAll("input");
    let totalScore = 0;
    let totalCredits = 0;

    allInputs.forEach((input) => {
      if (input.value == "") {
        e.preventDefault();
      }
      
      const inputValue = parseFloat(input.value);
      const customValue = parseFloat(input.dataset.custom);

      if (inputValue && customValue) {
        totalScore += inputValue * customValue;
        totalCredits += customValue;
      }
    
    });

    

    const average = (totalScore / totalCredits).toFixed(2);
    setResult(Number(average))
  };
  return (
    <div className="form-page container">
      <h2 className="title">
        Calculate your average for the Baccalaureate in <span>{branchName}</span>
      </h2>
      {subjectsData.map((subject, id) => {
        if (subject.subjectName === branchName) {
          return (
              
              <form key={id} className="models-holder">
                {subject.models.map((model, index) => {
                  return (
                    <Input
                      id={index}
                      key={index}
                      name={model.name}
                      credit={model.credit}
                    />
                  );
                })}
                <Link href="/result" className="avg-btn" onClick={handleclick}>
                  average
                </Link>
              </form>
          );
        }
      })}
    </div>
  );
}
