import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        title: "Anlálisis",
        description: "Escuchamos tu ídea o problemática para identificar los aspectos importantes y críticos.",
    },
    {
        id: "2",
        title: "Diseño",
        description: "Tomando en cuenta el anáñisis previo elegimos las tecnologías a utilizar, diseñamos la arquitectura del proyecto y el arte del mismo.",
    },
    {
        id: "3",
        title: "Implementación",
        description: "Saltamos del papel y nos ponemos manos a la obra con las mejores prácticas y bajo la metodologpias Scrum.",
    },
    {
        id: "4",
        title: "Montaje",
        description: "El proyecto está en línea es hora de utilizarlo y monitorear que todo este funcionando de manera correcta.",
    }
]

const TimelineTwo = ({classVar}) => {
    return (
        <div className="timeline-style-two bg-color-blackest">
            <div className="row row--0">
                {/* Start Single Progress */}
                {TimelineData.map((data , index) =>(
                    <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`} key={index}>
                        <div className="rn-timeline">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h6 className="title">{data.title}</h6>
                            </ScrollAnimation>
                            <div className="progress-line">
                                <div className="line-inner"></div>
                            </div>
                            <div className="progress-dot">
                                <div className="dot-level">
                                    <div className="dot-inner"></div>
                                </div>
                            </div>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">{data.description}</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                ))}
                {/* End Single Progress */}
            </div>
        </div>
    )
}
export default TimelineTwo;