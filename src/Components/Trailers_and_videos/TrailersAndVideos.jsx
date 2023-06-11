import React from "react";
import Ambush from "./img/Ambush.jpg";
import Criminal2022 from "./img/Criminal-2022.jpg";
import CreedIII from "./img/Creed-III.jpg";
import TheDevilConspiracy from "./img/The-Devil-Conspiracy.jpg";
import KarmaStrikes from "./img/Karma-Strikes.jpg";
import MeteorFirstImpact from "./img/Meteor-First-Impact.jpg";
import Gulmohar from "./img/Gulmohar.jpg";
import Unwelcome from "./img/Unwelcome.jpg";
import trailersAndVideoBg from "./img/trailers-and-video-bg4bb2.jpg";

function TrailersAndVideos() {


    const tvBg = {
        backgroundImage: `url(${trailersAndVideoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-Repeat",
        padding: "80px 0px 80px 0px",
    }

    const tvHead = {
        marginBottom: "40px",
        fontSize: "24px",
        borderBottom: "1.4px solid gray",
    }

    const tvPoster = {

    }

    const tvCol = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }



    return (

        <section className="container bg-dark" style={tvBg}>
            <div className="row">
                <div className="col-10 mx-auto">


                    <div className="row">
                        <div className="col-sm-12 mx-auto" style={tvHead}>
                            <p className="text-light">Trailers & Videos</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-3 col-6" style={tvCol}>
                            <img style={tvPoster} src={Ambush} alt="" height="200px" width="60%"></img>
                            <div>
                                <p className="text-light">Ambush</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" style={tvCol}>
                            <img style={tvPoster} src={Criminal2022} alt="" height="200px" width="60%"></img>
                            <div>
                                <p className="text-light">Criminal 2022</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" style={tvCol}>
                            <img style={tvPoster} src={CreedIII} alt="" height="200px" width="60%"></img>
                            <div>
                                <p className="text-light">Creed III</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" style={tvCol}>
                            <img style={tvPoster} src={TheDevilConspiracy} alt="" height="200px" width="60%"></img>
                            <div>
                                <p className="text-light">The Devil Conspiracy</p>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-lg-3 col-6" style={tvCol}>
                            <img style={tvPoster} src={KarmaStrikes} alt="" height="200px" width="60%"></img>
                            <div>
                                <p className="text-light">Karma Strikes</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" style={tvCol}>
                            <img style={tvPoster} src={MeteorFirstImpact} alt="" height="200px" width="60%"></img>
                            <div>
                                <p className="text-light">Meteor First Impact</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" style={tvCol}>
                            <img style={tvPoster} src={Gulmohar} alt="" height="200px" width="60%"></img>
                            <div>
                                <p className="text-light">Gulmohar</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" style={tvCol}>
                            <img style={tvPoster} src={Unwelcome} alt="" height="200px" width="60%"></img>
                            <div>
                                <p className="text-light">Unwelcome</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default TrailersAndVideos;