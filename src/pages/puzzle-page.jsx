import React from "react";
import { useState } from "react";
import "../assets/puzzlePage.scss";


const PuzzlePage = () => {
    const[situations, setSituation] = useState(0);

    return(
    <div className="wrap-game">
        <div className="surprise-button" notifyCount="1">
        </div>
    </div>
    )
}

export default PuzzlePage;