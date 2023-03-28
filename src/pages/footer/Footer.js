import React from 'react';

import LeafImg from '../../images/leaf.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

export const Footer = () => {
    return (
        <div>
            <footer className="container-fluid d-flex flex-column justify-content-center align-items-center px-5 py-4">
                <p className="text__azul">
                    <span>DEV Community </span> 👩‍💻👨‍💻 — A constructive and inclusive social
                    network for software developers. With you every step of your journey.
                </p>
  
                <p>
                    Built on <span> Forem </span> — the <span> open source </span> software
                    that powers <span> DEV </span> and other inclusive communities.
                </p>
  
                <p>
                    Made with love and <span> Ruby on Rails. </span> DEV Community 👩‍💻👨‍💻 ©
                    2016 - 2022.
                </p>
                <div className="mb-5">
                    <a className="logoContainer" href="/" role="button">
                        <img src={LeafImg} alt="logo"/>
                    </a>
                </div>
            </footer>
        </div>
    )
}