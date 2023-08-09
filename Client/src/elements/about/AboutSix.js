import React from 'react';
import {Link} from "react-router-dom";
import ProgressbarOne from "../progressbar/ProgressbarOne";
import SectionTitleTwo from "../sectionTitle/SectionTitleTwo";

const AboutSix = () => {
    return (
        <div className="about-style-6 rn-section-gap">
            <div className="plr_md--30 plr_sm--30">
                <div className="wrapper theme-shape">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-12">

                            <picture className="thumbnail text-start text-lg-center">
                                <source srcSet="./images/about/iot.avif"  type="image/avif" />
                                <source srcSet="./images/about/iot.webp"  type="image/webp" />
                                <img loading="lazy" src="./images/about/iot.png" alt="Internet de las cosas" />
                            </picture>

                        </div>
                        <div className="col-lg-8 col-md-6 col-12 mt_sm--30">
                            <div className="inner">
                                <span className="theme-gradient subtitle">Tenemos una solución Integral para ti.</span>
                                <h4 className="color-white maintitle">Sitios Web <br/> ERP <br/> Automatización <br/> IoT</h4>
                                <div className="read-more-btn">
                                    <Link className="btn-default btn-border" to="/portfolio">Ver más Proyectos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* 
                <div className="row row--15">
                    <div className="col-lg-12">
                        <div className="rbt-progress-style-1 mt--60">
                            <SectionTitleTwo
                                Title= "Nuestras Trabajos."
                                textAlign= "text-start mb--40"
                            />
                            <ProgressbarOne />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AboutSix
