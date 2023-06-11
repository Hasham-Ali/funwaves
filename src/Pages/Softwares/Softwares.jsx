import React from "react";
import softwarebanner from "./softwarebanner.jpg";
import AdobeAfterEffectsCC2022 from "./Adobe-After-Effects-CC-2022.jpg";
import CorelVideoStudioUltimate2022 from "./Corel-VideoStudio-Ultimate-2022.jpg";
import Windows11 from "./Windows-11.jpg";
import AdobePhotoshopCC2022 from "./Adobe-Photoshop-CC-2022.jpg";
import CyberLinkColorDirectorUltra from "./CyberLink-ColorDirector-Ultra.jpg";
import AdobeIllustratorCC2022 from "./Adobe-Illustrator-CC-2022.png";
import videoStudio from "./video studio.jpg";
import paintShopPro2023 from "./paintshop pro 2023.jpg";
import kali2022 from "./kali 2022.jpg";
import corelVideoStudio2021 from "./corel video studio 2021.jpg";
import cinema4d from "./cinema 4d.jpg";
import centosStream9 from "./centos stream 9.jpg";
import windowsXpSp3 from "./windows xp sp3.jpg";
import ucbrowser from "./ucbrowser.jpg";
import microsoftOffice2023 from "./microsoft office 2023.jpg";
import imgburn from "./imgburn.jpg";
import avastPremier from "./avast premier.jpg";
import adobeAcrobatXPro from "./adobe acrobat x pro.jpg";

function Softwares() {


    const banner = {
        backgroundImage: `  linear-gradient(rgba(6, 6, 6, 0.627),rgba(8, 8, 8, 0.718)),url(${softwarebanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "100px"
    }

    const gameTitle = {
        marginTop: "8px",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "40px"
    }

    return (

        <div>
            <section className="container-fluid">
                <div className="row" style={banner}>
                    <h3>New Softwares</h3>
                </div>
            </section>

            <section className="container">
                <div className="row">

                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={AdobeAfterEffectsCC2022} width="100%" height="150px"></img>
                        <p style={gameTitle}>Adobe After Effects CC 2022</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={CorelVideoStudioUltimate2022} width="100%" height="150px"></img>
                        <p style={gameTitle}>Corel Video Studio Ultimate 2022</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Windows11} width="100%" height="150px"></img>
                        <p style={gameTitle}>Windows 11</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={AdobePhotoshopCC2022} width="100%" height="150px"></img>
                        <p style={gameTitle}>Adobe Photoshop CC 2022</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={CyberLinkColorDirectorUltra} width="100%" height="150px"></img>
                        <p style={gameTitle}>Cyber Link Color Director Ultra</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={AdobeIllustratorCC2022} width="100%" height="150px"></img>
                        <p style={gameTitle}>Adobe Illustrator CC 2022</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={videoStudio} width="100%" height="150px"></img>
                        <p style={gameTitle}>video Studio</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={paintShopPro2023} width="100%" height="150px"></img>
                        <p style={gameTitle}>paint Shop Pro 2023</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={kali2022} width="100%" height="150px"></img>
                        <p style={gameTitle}>kali 2022</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={corelVideoStudio2021} width="100%" height="150px"></img>
                        <p style={gameTitle}>corel Video Studio 2021</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={cinema4d} width="100%" height="150px"></img>
                        <p style={gameTitle}>cinema 4d</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={centosStream9} width="100%" height="150px"></img>
                        <p style={gameTitle}>centos Stream 9</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={windowsXpSp3} width="100%" height="150px"></img>
                        <p style={gameTitle}>windows Xp Sp3</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={ucbrowser} width="100%" height="150px"></img>
                        <p style={gameTitle}>ucbrowser</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={microsoftOffice2023} width="100%" height="150px"></img>
                        <p style={gameTitle}>uncharted</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={imgburn} width="100%" height="150px"></img>
                        <p style={gameTitle}>imgburn</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={avastPremier} width="100%" height="150px"></img>
                        <p style={gameTitle}>avast Premier</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={adobeAcrobatXPro} width="100%" height="150px"></img>
                        <p style={gameTitle}>adobe Acrobat X Pro</p>

                    </div>

                </div>




            </section>
        </div>
    )
}

export default Softwares;