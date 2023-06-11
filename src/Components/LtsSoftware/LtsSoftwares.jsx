import React from "react";
import AdobeAfterEffectsCC2022 from "./Adobe-After-Effects-CC-2022.jpg";
import CorelVideoStudioUltimate2022 from "./Corel-VideoStudio-Ultimate-2022.jpg";
import Windows11 from "./Windows-11.jpg";
import AdobePhotoshopCC2022 from "./Adobe-Photoshop-CC-2022.jpg";
import CyberLinkColorDirectorUltra from "./CyberLink-ColorDirector-Ultra.jpg";
import AdobeIllustratorCC2022 from "./Adobe-Illustrator-CC-2022.png";

function LtsSoftwares() {

    const LtsSoftwaresHead = {
        paddingTop: "20px",
        marginTop: "60px",
        fontSize: "24px",
    };
    const LtsSoftwaresTitle ={
        marginTop: "4px",
        fontSize: "12px",
        fontWeight: "bold",
    }

    return (

        <section className="container">
            <div className="row">
                <div className="col-sm-10 mx-auto" style={LtsSoftwaresHead}>
                    <p>Latest Softwares</p><hr></hr>
                </div>
            </div>
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col-sm-10 mx-auto">
                    <div className="row">

                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={AdobeAfterEffectsCC2022} width="100%" height="150px"></img>
                        <p style={LtsSoftwaresTitle}>Adobe After Effects CC 2022</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={CorelVideoStudioUltimate2022} width="100%" height="150px"></img>
                        <p style={LtsSoftwaresTitle}>Corel Video Studio Ultimate 2022</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={Windows11} width="100%" height="150px"></img>
                        <p style={LtsSoftwaresTitle}>Windows 11</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={AdobePhotoshopCC2022} width="100%" height="150px"></img>
                        <p style={LtsSoftwaresTitle}>Adobe Photo shop CC 2022</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={CyberLinkColorDirectorUltra} width="100%" height="150px"></img>
                        <p style={LtsSoftwaresTitle}>Cyber Link Color Director Ultra</p>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={AdobeIllustratorCC2022} width="100%" height="150px"></img>
                        <p style={LtsSoftwaresTitle}>Adobe Illustrator CC 2022</p>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    );

};

export default LtsSoftwares;