import React from "react";
import moviesbanner from "./moviesbanner.jpg";
import DieHartTheMovie from "./Die-Hart-The-Movie.jpg";
import PussInBootsTheLastWish from "./Puss-in-Boots-The-Last-Wish.jpg";
import AntManAndTheWaspQuantumania from "./Ant-Man-and-the-Wasp-Quantumania.jpg";
import WeHaveAGhost from "./We-Have-a-Ghost.jpg";
import Aquamana from "./Aquaman.jpg";
import Avengersinfinitywar from "./Avengers infinity war.jpg";
import Blackadam from "./Black adam.jpg";
import F9thefastsaga from "./F9 the fast saga.jpg";
import Godzillavskong from "./Godzilla vs kong.jpg";
import Jumanjiwelcometothejungle from "./Jumanji welcome to the jungle.jpg";
import Rampageg from "./Rampage.jpg";
import Spidermannowayhome from "./Spider man no way home.jpg";
import Theloinking from "./The loin king.jpg";
import Themeg from "./The meg.jpg";
import Thorloveandthunder from "./Thor love and thunder.jpg";
import VenomLetThereBeCarnage from "./Venom Let There Be Carnage.jpg";
import ZackSnydersJusticeLeague from "./Zack Snyder's Justice League.jpg";
import joker from "./joker.jpg";


function Dubmovies() {

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
                    <h3>Dub Movies</h3>
                </div>
            </section>

            <section className="container">
                <div className="row">

                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={DieHartTheMovie} width="100%" height="250px"></img>
                        <p style={gameTitle}>Atomic Heart</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={PussInBootsTheLastWish} width="100%" height="250px"></img>
                        <p style={gameTitle}>FarCry 6</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={AntManAndTheWaspQuantumania} width="100%" height="250px"></img>
                        <p style={gameTitle}>Returnal</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={WeHaveAGhost} width="100%" height="250px"></img>
                        <p style={gameTitle}>FIFA 23</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Aquamana} width="100%" height="250px"></img>
                        <p style={gameTitle}>Midnight Suns</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Avengersinfinitywar} width="100%" height="250px"></img>
                        <p style={gameTitle}>Need for Speed Unbound</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Blackadam} width="100%" height="250px"></img>
                        <p style={gameTitle}>wwe 2k23</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={F9thefastsaga} width="100%" height="250px"></img>
                        <p style={gameTitle}>vampaire</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Godzillavskong} width="100%" height="250px"></img>
                        <p style={gameTitle}>uncharted</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={Jumanjiwelcometothejungle} width="100%" height="250px"></img>
                        <p style={gameTitle}>stray</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Rampageg} width="100%" height="250px"></img>
                        <p style={gameTitle}>sifu</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Spidermannowayhome} width="100%" height="250px"></img>
                        <p style={gameTitle}>life Is Strange</p>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Theloinking} width="100%" height="250px"></img>
                        <p style={gameTitle}>god Of War</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Themeg} width="100%" height="250px"></img>
                        <p style={gameTitle}>forza 5</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={Thorloveandthunder} width="100%" height="250px"></img>
                        <p style={gameTitle}>dragon Ball 2</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto2">
                        <img src={VenomLetThereBeCarnage} width="100%" height="250px"></img>
                        <p style={gameTitle}>hog Warts</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={ZackSnydersJusticeLeague} width="100%" height="250px"></img>
                        <p style={gameTitle}>gotham Knights</p>

                    </div>
                    <div className="col-lg-2 col-sm-4  col-4 mx-auto">
                        <img src={joker} width="100%" height="250px"></img>
                        <p style={gameTitle}>evil West</p>

                    </div>

                </div>


            </section>
        </div>
    )
}

export default Dubmovies;