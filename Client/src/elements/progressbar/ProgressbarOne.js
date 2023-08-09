import React from 'react';
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";

const progressData = [
    {
      id: 1,
      title: "Sitios Empresariales WP",
      percantage: 90,
      progressColor: "#059DFF",
    },
    {
      id: 2,
      title: "Sisitios Empresariales SPA",
      percantage: 75,
      progressColor: "#FB5343",
    },
    {
      id: 3,
      title: "Automatización",
      percantage: 70,
      progressColor: "#E33FA1",
    },
    {
      id: 4,
      title: "Industria 4.0",
      percantage: 95,
      progressColor: "#6549D5",
    },
    {
      id: 4,
      title: "Instalaciones Seguridad",
      percantage: 95,
      progressColor: "#6549D5",
    },
];

const ProgressbarOne = () => {
    return (
        <>
            {progressData.map((progress) => (
            <TrackVisibility
                once
                key={progress.id}
                className="single-progress"
            >
                <Skill progress={progress} /> 
            </TrackVisibility>
            ))} 
        </>
    )
}


export default ProgressbarOne;
