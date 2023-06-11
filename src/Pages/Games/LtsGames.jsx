import React from "react";
import AtomicHeart from "./Atomic-Heart.jpg";
import FarCry6 from "./Far-Cry-6.jpg";
import Returnal from "./Returnal.jpg";
import FIFA23 from "./FIFA-23.jpg";
import MidnightSuns from "./Midnight-Suns.jpg"
import NeedforSpeedUnbound from "./Need-for-Speed-Unbound.jpg";

function LtsGames() {

    const LtsGamesHead = {
        paddingTop: "20px",
        marginTop: "60px",
        fontSize: "24px",
    };
    const LtsGamesTitle ={
        marginTop: "4px",
        fontSize: "12px",
        fontWeight: "bold",
    }

    return (

        <section className="container">
            <div className="row">
                <div className="col-sm-10 mx-auto" style={LtsGamesHead}>
                    <p>Latest Games</p><hr></hr>
                </div>
            </div>
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col-sm-10 mx-auto">
                    <div className="row">

                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={AtomicHeart} width="100%" height="200px"></img>
                        <p style={LtsGamesTitle}>Atomic Heart</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={FarCry6} width="100%" height="200px"></img>
                        <p style={LtsGamesTitle}>Far Cry 6</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={Returnal} width="100%" height="200px"></img>
                        <p style={LtsGamesTitle}>Returnal</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={FIFA23} width="100%" height="200px"></img>
                        <p style={LtsGamesTitle}>FIFA 23</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={MidnightSuns} width="100%" height="200px"></img>
                        <p style={LtsGamesTitle}>Midnight Suns</p>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-4 mx-auto">
                        <img src={NeedforSpeedUnbound} width="100%" height="200px"></img>
                        <p style={LtsGamesTitle}>Midnight Suns</p>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    );

};

export default LtsGames;