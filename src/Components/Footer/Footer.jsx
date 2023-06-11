import React from "react";
import { NavLink } from "react-router-dom";
import avangerBg from "./avengers-infinity-war.jpg";




function Footer() {

    const footerStyle = {
        backgroundImage: `  linear-gradient(rgba(11, 11, 11, 0.927),rgba(12, 12, 12, 0.918)),url(${avangerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "160px",
    };

    const footerLogoCol = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "38vh"
    };

    const footerLogo = {
        color: "#ff471a",
        fontWeight: "bold",
    };

    const footerNavCol = {
        borderTop: "1.5px solid gray",

    };
    const footerNavUl = {
        listStyleType: "none",
        left: "0px",

    };

    const footerNavLi = {
        display: "inline-block",
        marginTop: "14px",
        textDecoration: "none",
        fontSize: "14px",
    };


    const footerRights = {
        right: "0px",
        fontSize: "14px",
        marginTop: "24px"
    }

    return (

        <section className="container-fluid" style={footerStyle}>

            <div className="row">
                <div className="col-sm-10 mx-auto" style={footerLogoCol}>
                    <h2 style={footerLogo}>FunWaves</h2>
                </div>
            </div>


                <div className="row">
                    <div className="col-lg-10 mx-auto" style={footerNavCol}>
                        <div className="row">

                            <div className="col-lg-9 col-sm-12">
                                <ul style={footerNavUl}>
                                    <li style={footerNavLi}><NavLink className="nav-link active text-secondary" to="/">Home</NavLink></li>
                                    <li style={footerNavLi}><NavLink className="nav-link active text-secondary" to="/games">Games</NavLink></li>
                                    <li style={footerNavLi}><NavLink className="nav-link active text-secondary" to="softwares">Sofwares</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-sm-12">
                                <p className="text-secondary" style={footerRights}>© 2023 FUNWAVE All rights reserved.</p>
                            </div>

                        </div>
                    </div>
                </div>

        </section>
    );
};


export default Footer;