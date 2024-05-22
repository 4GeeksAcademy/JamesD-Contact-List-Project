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
                                <div className="" key={contact.id}>
                                    <ContactCard name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} /> 
                                    <div className="d-flex justify-content-center">
                                        <div className="card-footer d-flex justify-content-center" style={{ width: '18rem' }}>
                                            <Link to={"/editcontact/"+ contact.id}>
                                                <button className="btn btn-success">Update</button>
                                            </Link>
                                            <button  className="btn btn-danger" onClick={() => actions.deleteContact(contact.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Contact;