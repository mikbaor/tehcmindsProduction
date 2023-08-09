import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import handleWhatssApp from '../../helpers/buttons';

const CopyrightTwo = () => {
    return (
        <div className="copyright-area copyright-style-one variation-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><Link to="/about-us">Conócenos</Link></li>
                                <li><Link onClick={e=> handleWhatssApp()}>Agenda una Vieo Conferencia</Link></li>
                                <li><Link to="/contact">Contactanos</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 mt_sm--20">
                        <div className="copyright-center text-center">
                            <ul className="social-icon social-default color-lessdark justify-content-center">
                                <li><a href="https://www.facebook.com/techmindss/" target="_blank"><FiFacebook /></a></li>
                                {/* <li><Link to="twitter.com"><FiTwitter /></Link></li> */}
                                <li><a href="https://www.instagram.com/techmindsconsulting/" target="_blank"><FiInstagram /></a></li>
                                {/* <li><Link to="linkdin.com"><FiLinkedin /></Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
                        <div className="copyright-right text-center text-lg-right">
                            <p className="copyright-text">Copyright All rights reserved © {new Date().getFullYear()} Techminds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CopyrightTwo;