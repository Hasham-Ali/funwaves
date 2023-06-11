import React from "react";
import Unlocked2023 from "./Unlocked-2023.jpg";
import LittleDixie from "./Little-Dixie.jpg";
import LutherTheFallenSun from "./Luther-The-Fallen-Sun.jpg";
import AManCalledOtto from "./A-Man-Called-Otto.jpg";



function SptHollywood() {

    const sptBody = {
        paddingTop: "20px",
    }

    const movie1 = {
        height: "420px",
    }
    const movie2 = {
        height: "420px",

    }
    const movie3 = {
        height: "420px",

    }
    const movie4 = {
        height: "420px",

    }

    const movieTitle = {
        padding: "20px 0px 20px 0px"
    }

    return (

        <section className="container" style={sptBody}>
            <div className="row">
                <div className="col-10 mx-auto">

                    <div className="row">

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie1}>
                                <img height="80%" width="100%" src={LittleDixie} alt="" />
                                <div>
                                    <h5 style={movieTitle}>Little Dixie</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie2}>
                                <img height="80%" width="100%" src={Unlocked2023} alt="" />
                                <div>
                                    <h5 style={movieTitle}>Unlocked 2023</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie3}>
                                <img height="80%" width="100%" src={LutherTheFallenSun} alt="" />
                                <div>
                                    <h5 style={movieTitle}>Luther The Fallen Sun</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie4}>
                                <img height="80%" width="100%" src={AManCalledOtto} alt="" />
                                <div>
                                    <h5 style={movieTitle}>A Man Called Otto</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}


export default SptHollywood;