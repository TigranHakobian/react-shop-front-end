import React from "react";
import ContactInFooter from "./ContactInFooter";
import UsefulLinks from "./UsefulLinks";
import EmailSupport from "./EmailSupport";


const Footer = () => {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <ContactInFooter/>
                    <UsefulLinks/>
                    <EmailSupport/>
                </div>





            </div>
        </footer>
    )
}

export default Footer
