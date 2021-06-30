import React from "react";

const ContactInFooter = () =>{
    return(
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">

                <div className="footer__about__logo">
                    <a href="./index.html">
                        <img src="img/logo.png" alt="" />
                    </a>
                </div>
                <ul>
                    <li>Address: 60-49 Road 11378 New York</li>
                    <li>Phone: +65 11.188.888</li>
                    <li>Email:
                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__">
                            [email&#160;protected]</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactInFooter
