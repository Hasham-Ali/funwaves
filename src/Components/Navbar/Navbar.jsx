import React from "react";
import { NavLink } from "react-router-dom";
import csLogo from "./cs.png";

function NavBar() {

    return (

        <>

            <div className="container-fluid">
                <div className="row" style={{ background: "#f5f5f5" }}>
                    <div className="col-7 mx-auto">

                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"><h2 style={{ color: "#ff471a", fontWeight: "bold" }}>FunWaves</h2></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><ion-icon name="reorder-three-outline" size="large"></ion-icon></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active text-dark" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle text-dark" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Movies
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="nav-link text-dark dropdown-item" aria-current="page" to="hollywood">Hollywood</NavLink></li>
                                                <li><NavLink className="nav-link text-dark dropdown-item" aria-current="page" to="bollywood">Bollywood</NavLink></li>
                                                <li><NavLink className="nav-link text-dark dropdown-item" aria-current="page" to="dubmovies">Dub Movies</NavLink></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link active text-dark" aria-current="page" to="games">Games</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link active text-dark" aria-current="page" to="softwares">Softwares</NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-3">
                        <img className="img-fluid" alt="" src={csLogo} ></img>

                    </div>
                </div>
            </div>
        </>

    );
};


export default NavBar;