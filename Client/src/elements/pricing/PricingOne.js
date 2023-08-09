import React from 'react';
import { FiCheck } from "react-icons/fi";
import handleWhatssApp from '../../helpers/buttons';

const PricingOne = () => {
    return (
        <div className="row row--30">
            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">E-Commerce <br/> Word Press + WooCommerce</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">2,495</span>
                                </div>
                                <span className="subtitle">X 3 Pagos Quincenales</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Carrito de Compras</li>
                                <li><FiCheck /> Diversos Tipos de Pago</li>
                                <li><FiCheck /> Servidor y Dominio</li>
                                <li><FiCheck /> Capacitación WooCommerce</li>
                                <li><FiCheck /> Capacitación Word Press</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="#pricing" onClick={e => handleWhatssApp()}>¡Me Intersa!</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing active">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Desarrollo Emprasarial e Industrial</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">125</span>
                                </div>
                                <span className="subtitle">X Hora de Progración</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Rastreabilidad</li>
                                <li><FiCheck /> Automatización</li>
                                <li><FiCheck /> Reportes Excel, Generación Automática Pdfs</li>
                                <li><FiCheck /> Diseño a la Medida</li>
                                <li><FiCheck /> Los Mejores Lenguajes de Programación</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="#pricing" onClick={e => handleWhatssApp()}>¡Me Intersa!</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Sitio Empresarial Word Press</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">780</span>
                                </div>
                                <span className="subtitle">X 3 Pagos Semanales</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Conexión Redes Sociales</li>
                                <li><FiCheck /> Botón WhatsApp</li>
                                <li><FiCheck /> Servidor y Dominio</li>
                                <li><FiCheck /> Catálogo de Productos</li>
                                <li><FiCheck /> Capacitación Word Press</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="#pricing" onClick={e => handleWhatssApp()}>¡Me Intersa!</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}
        </div>
    )
}
export default PricingOne;
