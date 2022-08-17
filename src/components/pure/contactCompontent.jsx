import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactCompontent = ({contact}) => {

    const [connected, setConnected] = useState(contact.connected);

    const changeConnectState = () => {
        setConnected(!connected)
    }

    return (
        <div>
            <h2>{contact.name} {contact.lastname}</h2>
            <h3>{contact.email}</h3>
            <button onClick={changeConnectState}>{connected ? 'Online' : 'Not available'}</button>
        </div>
    );
};


ContactCompontent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactCompontent;
