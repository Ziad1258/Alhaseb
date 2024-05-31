import "./home.css";
import { FaClock } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";



export default function Home() {
  const featurs = [
    {
      icon: <FaClock />,
      title: "Automatic calculation",
      text: "Get your Baccalaureate average , and SNV university average quickly and accurately using our automatic calculato",
    },
    {
      icon: <GiProgression />,
      title: "Progress tracking",
      text: "Track your progress and discover the subjects where you can improve to increase your average",
    },
    {
      icon: <FaEnvelope />,
      title: "Automatic calculation",
      text: "translates to Share the website with your friends so that they can calculate their Baccalaureate average and their university specialization average",
    },
  ];
  return (
    <div className="home-page container">
      <div className="head-page">
        <h1 className="title">Welcome</h1>
        <h2 className="subtitle">
          Calculate your Baccalauréat average in Algeria
        </h2>
      </div>
        <Link className="bac-btn btn" href="/branches">calaculate your bac average</Link>
      <div className="features-container">
        {featurs.map((feat, index) => {
          return (
            <div key={index} className="feat">
              <span>{feat.icon}</span>
              <h2>{feat.title}</h2>
              <p>{feat.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
