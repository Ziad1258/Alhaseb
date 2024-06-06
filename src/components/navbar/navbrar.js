"use client";
import { useParams } from "next/navigation";
import "./navbar.css";
import Link from "next/link";

function Navbrar() {
  let { lang } = useParams();
  const languages = [{ lang: "en" , symbol : "en" }, { lang: "fr" , symbol : "fr" }, { lang: "ع" , symbol : "ar"  }];

  const handlclick = (l) => {
    let currentUrl = window.location.pathname.split("/"); // Get the current page URL
    currentUrl[1] = l;
    window.location.pathname = currentUrl.join("/");
  };

  return (
    <div className="lang-icons-container container" style={lang == "ar" ? {direction : 'rtl'} : {direction : "ltr"}} >
      {languages.map((lg, index) => {
        return (
          <button
            key={index}
            className="lang-icon btn"
            style={{ display: lang === lg.symbol ? "none" : "flex" }}
            onClick={() => handlclick(lg.symbol)}
          >
            {lg.lang}
          </button>
        );
      })}
    </div>
  );
}

export default Navbrar;
