'use client'
import React from "react";
import "./page.css";
import Link from "next/link";
import { branches } from "../data";
export default function Branches() {

 

    
    
    

  
  return (
    <div className="branches-container container">
     <div className="head-page">
     <h1 className="title">Choose your high school specialization</h1>
      <p className="text">
        All high school specializations are available for calculation, good
        luck!
      </p>
     </div>

     <div className="branches-board">
    

    {branches.map((branch,index) => {
        return (
                <Link key={index} className="branch-btn btn" href={`/branches/${branch.en}`}>
                 calculate the average of the {branch.en} bac
                </Link>
        )
    })}


     </div>
      
    </div>
  );
}
