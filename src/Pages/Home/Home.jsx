import React from "react";
import { useState } from "react";
import hollywoodBanner from "./imgs/hollywood_banner.png";
import bollywoodBanner from "./imgs/bollywood_banner.png";
import gameBanner from "./imgs/game_banner.png";
import SptHollywood from "../../Components/SpotLight_hollywood/SptHollyood";
import SptBollywood from "../../Components/SportLight_bollywood/SptBollywood";
import SportLightNav from "./../../Components/SpotLight_nav/SpotLightNav";
import LtsGames from "../../Components/Lts_games/LtsGames";
import LtsSoftwares from "../../Components/LtsSoftware/LtsSoftwares";
import TrailersAndVideos from "../../Components/Trailers_and_videos/TrailersAndVideos";
import SptDubMovies from "../../Components/SpotLight_dub/SpotLightDub.jsx";

function Home() {

    const SpotlightHead = {
        paddingTop: "20px",
        marginTop: "60px",
        fontSize: "24px",
    };

    


    const [componentName, setComponentName] = useState("Hollywood");

    const changeComponentName = (componentName) => {setComponentName(componentName)};


    return (

        <div>


            <section className="container-fluid">
                <div className="row">

                    <div id="carouselExampleCaptions" className="carousel slide px-0" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src={hollywoodBanner} className="d-block w-100" style={{ height: "500px" }} alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Hollywood Movies</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <img src={bollywoodBanner} className="d-block w-100" style={{ height: "500px" }} alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Bollywood Movies</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <img src={gameBanner} className="d-block w-100" style={{ height: "500px" }} alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Video Games</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>



                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>


            <section className="container">
                <div className="row">
                    <div className="col-10 mx-auto" style={SpotlightHead}>
                        <p>Spotlight This Month</p><hr></hr>
                    </div>
                </div>

                <SportLightNav changeComponentName={changeComponentName} currentComponent={componentName}/>

                {componentName === "Hollywood" && <SptHollywood/>}
                {componentName === "Bollywood" && <SptBollywood/>}
                {componentName === "Dub" && <SptDubMovies/>}


                <TrailersAndVideos/>


                <LtsGames/>
                <LtsSoftwares/>

            </section>

        </div>


    )
}

export default Home;