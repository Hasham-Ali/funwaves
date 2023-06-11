import React from "react";
import AnActionHero from "./An-Action-Hero.jpg";
import MissionMajnu from "./Mission-Majnu.jpg";
import Pathaan from "./Pathaan.jpg";
import Woh3Din from "./Woh-3-Din.jpg";



function SptBollywood() {

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
                                <img height="80%" width="100%" src={AnActionHero} alt=""/>
                                <div>
                                    <h5 style={movieTitle}>An Action Hero</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie2}>
                                <img height="80%" width="100%" src={MissionMajnu} alt=""/>
                                <div>
                                    <h5 style={movieTitle}>Mission Majnu</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie3}>
                                <img height="80%" width="100%" src={Pathaan} alt="" />
                                <div>
                                    <h5 style={movieTitle}>Pathaan</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie4}>
                                <img height="80%" width="100%" src={Woh3Din} alt=""/>
                                <div>
                                    <h5 style={movieTitle}>Woh 3 Din</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}


export default SptBollywood;