"use client"
import "./page.css";

import Link from "next/link";

import { featurs } from "@/data";
import { homeData } from "@/data";
import { useParams } from "next/navigation";

export default function Home() {

  const {lang} = useParams();

  return (
    <div className="home-page container">
      <div className="head-page">
        <h1 className="title"> {homeData.welcome[lang]} </h1>
        <h2 className="subtitle">
        {homeData.head[lang]}
        </h2>
      </div>
        <Link className="bac-btn btn" href={`/${lang}/branches`}>
        {homeData.button[lang]}

        </Link>
      <div className="features-container">
        {featurs.map((feat, index) => {
          return (
            <div key={index} className="feat">
              <span>{feat.icon}</span>
              <h2>{feat.title[lang]}</h2>
              <p>{feat.text[lang]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
