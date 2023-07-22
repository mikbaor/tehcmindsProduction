import React from 'react'
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import { FiArrowRight } from "react-icons/fi";
import HeaderTwo from '../common/header/HeaderTwo';
import HeaderTopNews from '../common/header/HeaderTopNews';
import CopyrightTwo from '../common/footer/CopyrightTwo';
import AboutSix from '../elements/about/AboutSix';
import ScrollTop from "../common/footer/ScrollTop";
import ServiceFive from "../elements/service/ServiceFive";
import SectionTitleTwo from "../elements/sectionTitle/SectionTitleTwo";
import PricingOne from "../elements/pricing/PricingOne";
import BrandThree from "../elements/brand/BrandThree";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import ContactForm from "../elements/contact/ContactForm";
import handleWhatssApp from '../helpers/buttons';
import Starts from '../elements/starts/Starts';



const Freelancer = () => {
    return (
        <>
            <SEO title="Freelancer" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-transparent" />

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 variation-3 height-850 bg_image bg_image_fixed theme-shape" >
                    <Starts>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="inner text-start">
                                    <h1 className="title">¡Hola, bienvenidos a<br /><span className="theme-gradient">TechMinds!</span></h1>
                                    <p className="description">
                                    Somos un equipo de desarrolladores apasionados con sede en Puebla, México. En TechMinds, combinamos la creatividad y la innovación para ofrecer soluciones tecnológicas excepcionales que impulsan el éxito de nuestros clientes.
                                    </p>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <Link className="btn-default btn-border" onClick={e => handleWhatssApp()} to="#">Escríbenos</Link>
                                        <Link className="btn-default btn-icon" to="about-us">Conoce de nosotros<i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Starts>
                </div>
                {/* End Slider area  */}

                <AboutSix />


                <div className="rwt-timeline-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <TimelineTwo classVar="dark-line"  />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitleTwo
                                    Title= "Nuestros Últimos Word Press"
                                    textAlign= "text-start"
                                />
                            </div>
                        </div>
                        <ServiceFive 
                            serviceStyle = "gallery-style"
                            textAlign = "text-start"
                        />
                    </div>
                </div>


                

                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--40">
                                <SectionTitleTwo
                                    Title= "Nuestros Precios."
                                    textAlign= "text-start"
                                />
                            </div>
                        </div>
                        <PricingOne />
                    </div>
                </div>



                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}


                {/* Start Elements Area  */}
                {/* <div className="rwt-testimonial-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitleTwo
                                    Title= "My Clients Review."
                                    textAlign= "text-start"
                                />
                            </div>
                        </div>
                        <TestimonialOne column="col-lg-4 col-md-6 col-12" teamStyle="card-style-default testimonial-style-one style-two border-gradient" />
                    </div>
                </div> */}
                {/* End Elements Area  */}


                {/* <div className="contact-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitleTwo
                                    Title= "Contact With Me."
                                    textAlign= "text-start"
                                />
                            </div>
                        </div>
                        <div className="row row--30 mt--40">
                            <div className="col-lg-6 order-2 oder-lg-1 mt_md--30 mt_sm--30">
                                <ContactForm formStyle="contact-form-1" />
                            </div>
                            <div className="col-lg-6 order-1 oder-lg-2">
                                <div className="thumbnail">
                                    <img className="radius w-100" src="./images/about/contact-image.jpg" alt="Corporate" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <CopyrightTwo />
            </main>
            <ScrollTop />
        </>
    )
}
export default Freelancer;