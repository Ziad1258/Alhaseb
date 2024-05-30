'use client'
import { createContext, useState } from "react";
export const resultContext = createContext();


const ResultProvider = ({children}) => {
    const [result , setResult] = useState(0);
    const [language,setLang] = useState("en");
    return(
        <resultContext.Provider value={{result,setResult,language,setLang}}>
          {children}
        </resultContext.Provider>
    )
}

export default ResultProvider;
