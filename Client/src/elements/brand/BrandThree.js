import React from 'react';

import {
    FaLaravel,
    FaNodeJs,
    FaReact,
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
    FaPython,
    FaJava,
    FaVuejs,
    FaNpm,
    FaJsSquare,
    FaWordpress,
    FaPhp,
    FaYarn,
} from 'react-icons/fa'

const BrandThree = ({brandStyle}) => {

    const BrandList = [

        <FaLaravel/>,
        <FaNodeJs/>,
        <FaReact/>,
        <FaCss3Alt/>,
        <FaDocker/>,
        <FaGitAlt/>,
        <FaJava/>,
        <FaVuejs/>,
        <FaPython/>,
        <FaNpm/>,
        <FaJsSquare/>,
        <FaWordpress/>,
        <FaPhp/>,
        <FaYarn/>
    ]
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((ico, index) => (
                <li key={index} className="display-1">
                    {ico}
                </li>
            ))}
        </ul>
    )
}

export default BrandThree;
