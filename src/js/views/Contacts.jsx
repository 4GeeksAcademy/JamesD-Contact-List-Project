import React, { useContext, useEffect } from "react";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


const Contact = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div>
                {
                    store.contacts.map(contact => {
                        return (
                                <div key={contact.id}>
                                    <ContactCard name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} /> 
                                    <Link to={"/editcontact/"+ contact.id}>
                                        <button>Update</button>
                                    </Link>
                                    <button onClick={() => actions.deleteContact(contact.id)}>Delete</button>
                                </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Contact;