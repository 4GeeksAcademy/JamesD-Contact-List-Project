import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(""); 
    
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        loadContact();
    }, []);

    const loadContact = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/JamesD/contacts/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setName(data.name);
                setAddress(data.address);
                setEmail(data.email);
                setPhone(data.phone);
            });
    };

    const editContact = (e) => {
        e.preventDefault();
        const contactId = params.id; // Get the contact ID from params
        actions.updateContact(contactId, { name, email, phone, address });
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        navigate("/"); 
    };

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputName1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" className="form-control" id="exampleInputPhone1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" id="exampleInputAddress1" />
                </div>
                <button onClick={editContact} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default EditContact;
