import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <p><FontAwesomeIcon icon={faCopyright} /> Stephen Corke</p>
            <p>Built with <FontAwesomeIcon icon={faReact} /> </p>
           
        </div>
    );
};

export default Footer;