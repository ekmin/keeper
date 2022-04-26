import React from "react";

const day = new Date();
const year = day.getFullYear();

function Footer(){
    return(
    <footer>
    <p>Copyright {year}</p>
    </footer>
    );
}

export default Footer;
