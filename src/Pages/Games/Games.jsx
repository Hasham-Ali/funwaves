import React from "react";
import gamebanner from "./gamesbanner.jpg";
import AtomicHeart from "./Atomic-Heart.jpg";
import FarCry6 from "./Far-Cry-6.jpg";
import Returnal from "./Returnal.jpg";
import FIFA23 from "./FIFA-23.jpg";
import MidnightSuns from "./Midnight-Suns.jpg"
import NeedforSpeedUnbound from "./Need-for-Speed-Unbound.jpg";
import wwe2k23 from "./wwe 2k23.png";
import vampaire from "./vampaire.jpg";
import uncharted from "./uncharted.png";
import stray from "./stray.jpg";
import sifu from "./sifu.jpg";
import lifeIsStrange from "./life is strange.jpg";
import godOfWar from "./god of war.jpg";
import forza5 from "./forza 5.jpg";
import dragonBall2 from "./dragon ball 2.jpg";
import hogWarts from "./hogwarts.jpg";
import gothamKnights from "./gotham knights.jpg";
import evilWest from "./evil west.jpg"


function Games() {

    const banner = {
        backgroundImage: `  linear-gradient(rgba(6, 6, 6, 0.627),rgba(8, 8, 8, 0.718)),url(${gamebanner})`,
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
                    <h3>Video Games</h3>
                </div>
            </section>

            <section className="container">
                <div className="row">

                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={AtomicHeart} width="100%" height="250px"></img>
                        <p style={gameTitle}>Atomic Heart</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={FarCry6} width="100%" height="250px"></img>
                        <p style={gameTitle}>FarCry 6</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Returnal} width="100%" height="250px"></img>
                        <p style={gameTitle}>Returnal</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={FIFA23} width="100%" height="250px"></img>
                        <p style={gameTitle}>FIFA 23</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={MidnightSuns} width="100%" height="250px"></img>
                        <p style={gameTitle}>Midnight Suns</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={NeedforSpeedUnbound} width="100%" height="250px"></img>
                        <p style={gameTitle}>Need for Speed Unbound</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={wwe2k23} width="100%" height="250px"></img>
                        <p style={gameTitle}>wwe 2k23</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={vampaire} width="100%" height="250px"></img>
                        <p style={gameTitle}>vampaire</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={uncharted} width="100%" height="250px"></img>
                        <p style={gameTitle}>uncharted</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={stray} width="100%" height="250px"></img>
                        <p style={gameTitle}>stray</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={sifu} width="100%" height="250px"></img>
                        <p style={gameTitle}>sifu</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={lifeIsStrange} width="100%" height="250px"></img>
                        <p style={gameTitle}>life Is Strange</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={godOfWar} width="100%" height="250px"></img>
                        <p style={gameTitle}>god Of War</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={forza5} width="100%" height="250px"></img>
                        <p style={gameTitle}>forza 5</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={dragonBall2} width="100%" height="250px"></img>
                        <p style={gameTitle}>dragon Ball 2</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={hogWarts} width="100%" height="250px"></img>
                        <p style={gameTitle}>hog Warts</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={gothamKnights} width="100%" height="250px"></img>
                        <p style={gameTitle}>gotham Knights</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={evilWest} width="100%" height="250px"></img>
                        <p style={gameTitle}>evil West</p>

                    </div>

                </div>


            </section>
        </div>
    )
}

export default Games;