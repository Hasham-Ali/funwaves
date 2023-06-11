import React from "react";
import DieHartTheMovie from "./img/Die-Hart-The-Movie.jpg";
import PussInBootsTheLastWish from "./img/Puss-in-Boots-The-Last-Wish.jpg";
import AntManAndTheWaspQuantumania from "./img/Ant-Man-and-the-Wasp-Quantumania.jpg";
import WeHaveAGhost from "./img/We-Have-a-Ghost.jpg";



function SptDubMovies() {

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
                                <img height="80%" width="100%" src={DieHartTheMovie} alt=""/>
                                <div>
                                    <h5 style={movieTitle}>Die Hart The Movie</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie2}>
                                <img height="80%" width="100%" src={PussInBootsTheLastWish} alt=""/>
                                <div>
                                    <h5 style={movieTitle}>Puss in Boots The Last Wish</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie3}>
                                <img height="80%" width="100%" src={AntManAndTheWaspQuantumania} alt="" />
                                <div>
                                    <h5 style={movieTitle}>Ant Man and The Wasp Quantumania</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-6">
                            <div style={movie4}>
                                <img height="80%" width="100%" src={WeHaveAGhost} alt=""/>
                                <div>
                                    <h5 style={movieTitle}>We Have a Ghost</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}


export default SptDubMovies;