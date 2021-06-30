import React from "react";
import Contacts from "./Contacts";
import Langs from "./Langs";
import LoginInHeader from "./LoginInHeader";

const ContactsAndLangs =() =>{
    return(
        <div className="col-lg-6 col-md-6">
            <div className="header__top__right">
                <Contacts/>
                <Langs/>
                <LoginInHeader/>
            </div>
        </div>

    )
}

export default ContactsAndLangs
