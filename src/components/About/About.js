import React, { Component } from "react";
import "./About.css";
import AboutImg from "./About.svg";

export class About extends Component { 
    render () {
        return(
            <div className='about-section'>
                <div className='about-description'>
                    <h2 className='description-heading'>Why Codeessey ?</h2>
                    <p className='description-test'>
                        We are a team of experienced and well
                        cultured developers who share a common
                        goal of building the next generation of
                        web and mobile applications.
                    </p>
                    <button className='description-btn'>Contact Us</button>
                </div>
                <img className='about-img' src={AboutImg} alt="About-img"/>
            </div>
        );
    }
}
