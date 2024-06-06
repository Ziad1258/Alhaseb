"use client"
import SocialMediaIcons from "@/components/socialMediaIcons/SocialMediaIcons";
import React, { useContext, useState } from "react";
import { useParams } from "next/navigation";
import "./page.css"
import { resultContext } from "@/app/context/resultContext";
import Link from "next/link";
import { resultData } from "@/data";
export default function Result() {
   const {result} = useContext(resultContext);
   const [note,setNote] = useState(result > 10 ? true : false);
   const {lang} = useParams();
  
  return (
    <div className={`result-container ${note ? 'passed' : "failed"} `}>
      <div className="result-board">
        <h1 className="title">{note ? resultData.congats[lang] : resultData.failed[lang] }</h1>
        <p className="result-text" style={lang == "ar" ? {direction : 'rtl'} : {direction : "ltr"}} >
        {resultData.note[lang]}  : <span className={note ? "passed" : "failed"}>{result}</span>
        </p>
        <SocialMediaIcons name={"result"} />
        <Link href="/" className = {`close-button ${note ? 'passed' : "failed"}`} >
          X
        </Link>
      </div>
    </div>
  );
}
