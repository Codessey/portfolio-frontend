import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import "./Clients.css";

export class Clients extends Component {
    render () {
        return (
            <div className="client-wrapper" >
                <div className="client-section">
                    <div className="client-grid">
                        <FontAwesomeIcon icon={faUsers} className="client-icon" />
                        <h3 className="clients-heading">20+</h3>
                        <p className="clients-text">Team Members</p>
                    </div>
                    <div className="client-grid">
                        <FontAwesomeIcon icon={faTasks} className="client-icon" />
                        <h3 className="clients-heading">90%</h3>
                        <p className="clients-text">Business Success</p>
                    </div>
                    <div className="client-grid">
                        <FontAwesomeIcon icon={faHeart} className="client-icon" />
                        <h3 className="clients-heading">29</h3>
                        <p className="clients-text">Happy Clients</p>
                    </div>
                    <div className="client-grid">
                        <FontAwesomeIcon icon={faHandshake} className="client-icon" />
                        <h3 className="clients-heading">37</h3>
                        <p className="clients-text">Project Done</p>
                    </div>
                </div>
            </div>
        );
    }

}