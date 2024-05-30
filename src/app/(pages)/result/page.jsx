"use client"
import SocialMediaIcons from "@/components/socialMediaIcons/SocialMediaIcons";
import React, { useContext, useState } from "react";
import "./page.css"
import { resultContext } from "@/app/context/resultContext";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Result() {
   const {result} = useContext(resultContext);
   const [note,setNote] = useState(result > 10 ? true : false);
   const Click = () => {
    setTimeout(() => {
      window.location.reload();
    },1000)
   }
  return (
    <div className={`result-container ${note ? 'passed' : "failed"} `}>
      <div className="result-board">
        <h1 className="title">{note ? "congaratulation" : "hard Luck"}</h1>
        <p className="result-text">
          Your Note is : <span className={note ? "passed" : "failed"}>{result}</span>
        </p>
        <SocialMediaIcons name={"result"} />
        <Link href="/" className = {`close-button ${note ? 'passed' : "failed"}`} onClick={Click} >
          X
        </Link>
      </div>
    </div>
  );
}
