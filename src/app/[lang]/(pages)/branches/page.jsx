'use client'
import React from "react";
import "./page.css";
import Link from "next/link";
import { branches } from "../../../../data";
import { useParams } from "next/navigation";
export default function Branches() {

 

    
  const {lang} = useParams();

  
  return (
    <div className="branches-container container">
     <div className="head-page">
     <h1 className="title">{branches[0].title[lang]}</h1>
      <p className="text">
      {branches[0].sousTitle[lang]}
      </p>
     </div>

     <div className="branches-board">
    

    {branches[1].map((branch,index) => {
        return (
                <Link key={index} className="branch-btn btn" href={`/${lang}/branches/${branch.name.en}`}>
                 {branch.name[lang]} 
                </Link>
        )
    })}


     </div>
      
    </div>
  );
}
