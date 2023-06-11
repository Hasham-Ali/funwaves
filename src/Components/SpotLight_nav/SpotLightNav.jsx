import React from "react";


function SportLightNav({ changeComponentName, currentComponent }) {

    const componentss = ["Hollywood", "Bollywood", "Dub"];

    const navLink = {
        listStyleType: "none",
        display: "inline",
        padding: "0px",
        cursor: "pointer",
    }

    const list = {
        display: "inline-block",
        margin: "0px 30px 0px 0px",
    }



    return (


        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto">
                    <ul style={navLink}>
                        {componentss.map((page, index) => (
                            <li style={list}
                                key={index}
                                onClick={() => changeComponentName(page)}
                                className={currentComponent === page ? "li-active" : ""}
                            >
                                {page}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SportLightNav;