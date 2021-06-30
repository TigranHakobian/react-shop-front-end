import React from 'react';
import Header from "./Header";
import Footer from "./Footer/Footer";

const Wrapper = (props: any) => {
    return (
        <>
            {props.header === false ? null : <Header/>}

              {props.children}
            <Footer/>
        </>
    )
}

export default Wrapper
