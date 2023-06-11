import React from "react";
import moviesbanner from "./moviesbanner.jpg"
import Unlocked2023 from "./Unlocked-2023.jpg";
import LittleDixie from "./Little-Dixie.jpg";
import LutherTheFallenSun from "./Luther-The-Fallen-Sun.jpg";
import AManCalledOtto from "./A-Man-Called-Otto.jpg";
import A97minuts from "./97 minuts.jpg";
import Blackberry from "./Blackberry.jpg";
import Inbedwiththepedros from "./In bed with the pedros.jpg";
import Bora from "./Bora.jpg";
import Medellin from "./Medellin.jpg";
import MobKing from "./MobKing.jpg";
import Mojavedaimond from "./Mojave daimond.jpg";
import Myfault from "./My fault.jpg";
import Simulant from "./Simulant.jpg";
import Thesecretkingdom from "./The secret kingdom.jpg";
import Theyearofthedogk from "./The year of the dog.jpg";
import Tinandtinal from "./Tin & tina.jpg";
import Transformersriseofthebeast from "./Transformers rise of the beast.jpg";
import kandahar from "./kandahar.jpg"





function Hollywood () {


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

    const moviesTitle = {
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
                    <h3>Hollywood Movies</h3>
                </div>
            </section>

            <section className="container">
                <div className="row">

                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Unlocked2023} width="100%" height="250px"></img>
                        <p style={moviesTitle}>Atomic Heart</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={LittleDixie} width="100%" height="250px"></img>
                        <p style={moviesTitle}>FarCry 6</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={LutherTheFallenSun} width="100%" height="250px"></img>
                        <p style={moviesTitle}>Returnal</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={AManCalledOtto} width="100%" height="250px"></img>
                        <p style={moviesTitle}>FIFA 23</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={A97minuts} width="100%" height="250px"></img>
                        <p style={moviesTitle}>Midnight Suns</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Blackberry} width="100%" height="250px"></img>
                        <p style={moviesTitle}>Need for Speed Unbound</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Inbedwiththepedros} width="100%" height="250px"></img>
                        <p style={moviesTitle}>wwe 2k23</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Bora} width="100%" height="250px"></img>
                        <p style={moviesTitle}>vampaire</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Medellin} width="100%" height="250px"></img>
                        <p style={moviesTitle}>uncharted</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={MobKing} width="100%" height="250px"></img>
                        <p style={moviesTitle}>stray</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Mojavedaimond} width="100%" height="250px"></img>
                        <p style={moviesTitle}>sifu</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Myfault} width="100%" height="250px"></img>
                        <p style={moviesTitle}>life Is Strange</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Simulant} width="100%" height="250px"></img>
                        <p style={moviesTitle}>god Of War</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Thesecretkingdom} width="100%" height="250px"></img>
                        <p style={moviesTitle}>forza 5</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Theyearofthedogk} width="100%" height="250px"></img>
                        <p style={moviesTitle}>dragon Ball 2</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={Tinandtinal} width="100%" height="250px"></img>
                        <p style={moviesTitle}>hog Warts</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Transformersriseofthebeast} width="100%" height="250px"></img>
                        <p style={moviesTitle}>gotham Knights</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={kandahar} width="100%" height="250px"></img>
                        <p style={moviesTitle}>evil West</p>

                    </div>

                </div>


            </section>
        </div>

    )
}

export default Hollywood;