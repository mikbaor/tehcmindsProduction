import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/portfolio/buho',
        title: 'Bhuo',
        description: 'E-comerce de abarrotes.',
        url:'https://buhocomerdigital.com/'
    },
    {
        image: '/images/portfolio/provens',
        title: 'Provens',
        description: 'Sitio empresarial de medicina alternativa.',
        url:'https://provens.com.mx/'
    },
    {
        image: '/images/portfolio/optica',
        title: 'Óptica Ubaldo Cortés',
        description: 'Sitio empresarial óptica.',
        url:'https://opticaubaldocortes.com/'
    }
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <a href={val.url} target="_blank" dangerouslySetInnerHTML={{__html: val.title}}></a>
                                    </h4>
                                    <p className="description">
                                        <a href={val.url} target="_blank" dangerouslySetInnerHTML={{__html: val.url}}></a>
                                    </p>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                <picture>
                                    <source srcSet={`${val.image}.avif`}type="image/avif"/>
                                    <source srcSet={`${val.image}.webp`} type="image/webp"/>
                                    <img 
                                    loading="lazy"  src={`${val.image}.jpg`} alt={`Sitio Web ${i + 1}`}
                                    />
                                </picture>

                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;