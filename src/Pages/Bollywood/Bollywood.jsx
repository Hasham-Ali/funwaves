import React from "react";
import moviesbanner from "./moviesbanner.jpg"
import AnActionHero from "./An-Action-Hero.jpg";
import MissionMajnu from "./Mission-Majnu.jpg";
import Pathaan from "./Pathaan.jpg";
import Woh3Din from "./Woh-3-Din.jpg";
import Antim from "./Antim.jpg";
import Baaghi3 from "./Baaghi 3.jpg";
import Bachchhanpaandey from "./Bachchhan paandey.jpg";
import Commando3d from "./Commando 3.jpg";
import Drishyam2 from "./Drishyam 2.jpg";
import Gangubaikathiawadi from "./Gangubai kathiawadi.jpg";
import Housefull4 from "./House full 4.jpg";
import Khudahaafiz from "./Khuda haafiz.jpg";
import Marjaavaan from "./Mar jaavaan.jpg";
import Mumbaisaga from "./Mumbai saga.jpg";
import Sanju from "./Sanju.jpg";
import Simmba from "./Simmba.jpg";
import TotalDhamal from "./Total Dhamal.jpg";
import War from "./War.jpg";




function Bollywood () {


    const banner = {
        backgroundImage: `  linear-gradient(rgba(6, 6, 6, 0.627),rgba(8, 8, 8, 0.718)),url(${moviesbanner})`,
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
                    <h3>Bollywood Movies</h3>
                </div>
            </section>

            <section className="container">
                <div className="row">

                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={AnActionHero} width="100%" height="250px"></img>
                        <p style={gameTitle}>Atomic Heart</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={MissionMajnu} width="100%" height="250px"></img>
                        <p style={gameTitle}>FarCry 6</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Pathaan} width="100%" height="250px"></img>
                        <p style={gameTitle}>Returnal</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={Woh3Din} width="100%" height="250px"></img>
                        <p style={gameTitle}>FIFA 23</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Antim} width="100%" height="250px"></img>
                        <p style={gameTitle}>Midnight Suns</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Baaghi3} width="100%" height="250px"></img>
                        <p style={gameTitle}>Need for Speed Unbound</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Bachchhanpaandey} width="100%" height="250px"></img>
                        <p style={gameTitle}>wwe 2k23</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Commando3d} width="100%" height="250px"></img>
                        <p style={gameTitle}>vampaire</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Drishyam2} width="100%" height="250px"></img>
                        <p style={gameTitle}>uncharted</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={Gangubaikathiawadi} width="100%" height="250px"></img>
                        <p style={gameTitle}>stray</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Housefull4} width="100%" height="250px"></img>
                        <p style={gameTitle}>sifu</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Khudahaafiz} width="100%" height="250px"></img>
                        <p style={gameTitle}>life Is Strange</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Marjaavaan} width="100%" height="250px"></img>
                        <p style={gameTitle}>god Of War</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Mumbaisaga} width="100%" height="250px"></img>
                        <p style={gameTitle}>forza 5</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Sanju} width="100%" height="250px"></img>
                        <p style={gameTitle}>dragon Ball 2</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={Simmba} width="100%" height="250px"></img>
                        <p style={gameTitle}>hog Warts</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={TotalDhamal} width="100%" height="250px"></img>
                        <p style={gameTitle}>gotham Knights</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={War} width="100%" height="250px"></img>
                        <p style={gameTitle}>evil West</p>

                    </div>

                </div>


            </section>
        </div>
    )
}


export default Bollywood;