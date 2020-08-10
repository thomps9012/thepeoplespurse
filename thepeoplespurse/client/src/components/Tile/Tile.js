import React from 'react';
import "./Tile.css"
import { Link } from "react-router-dom";

const Tile = props => {
    return (
        <div className={props.classNames}>
            <div className="icon">
                <img
                    src={require("../../assets/images/" + props.icon + ".png")}
                    alt={"icon " + props.icon}
                />
            </div>
            <h3>{props.tileTitle}</h3>
            <p>{props.tileText}</p>
            <Link to={props.link}>{props.tileButton}</Link>
        </div>
    )
}

export default Tile;