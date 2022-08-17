import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactCompontent from '../pure/contactCompontent'

function ContactListComponent() {
    const defaultContact = new Contact('Pepito', 'Perez', 'pepito@perez', true)
    const defaultContact2 = new Contact('Pepita', 'Perez', 'pepita@perez', false)
  return (
    <div>
        <div>Your Contacts: </div>
        <ContactCompontent contact={defaultContact}></ContactCompontent>
        <ContactCompontent contact={defaultContact2}></ContactCompontent>
    </div>
  )
}

export default ContactListComponent

