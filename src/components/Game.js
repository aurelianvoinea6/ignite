import React from "react";
//styling and animation
import styled from 'styled-components';
import { motion } from "framer-motion";

const Game = ({name, released, image, }) => {
    return(
        <div>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </div>
    );
}

export default Game;