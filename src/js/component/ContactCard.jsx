import React from "react";



// this component will take props to populate each contact p tag
const ContactCard = ({name, address, phone, email}) => {

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-3 d-flex justify-content-center">
                <div className="contact card" style={{width:"18rem"}}>
                    <img  src="https://xsgames.co/randomusers/avatar.php?g=pixel" /> 
                    <div className="contact-info">
                        <p className="contact-name">{name}</p>
                        <p className="contact-phone">{phone}</p>
                        <p className="contact-address">{address}</p>
                        <p className="contact-email">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;