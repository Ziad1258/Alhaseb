'use client'
import React from "react";
import "./home.css";
import Link from "next/link";
export default function Page() {


  const Languages = [
    {
      lang:  "en" , 
      name  : "english"
    } ,
    {
      lang : "fr",
      name : "francais",

    }, {
      lang : "ar",
      name : "العربية"
    }
  ]
 

    
    
    

  
  return (
    <div className="home">
    <div className="branches-container container">
     <div className="head-page">
     <h1 className="title">Choose your Native language</h1>
      <p className="text">
        We provided 3 Languages in our website to make it available to all the users
      </p>
     </div>

     <div className="branches-board">
    

    {Languages.map((lang,index) => {
        return (
                <Link key={index} className="branch-btn btn" href={`${lang.lang}/home`}>
                 {lang.name}
                </Link>
        )
    })}


     </div>
      
    </div>

    </div>
  );
}
