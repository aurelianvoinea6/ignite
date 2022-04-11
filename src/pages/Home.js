import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//components
import Game from "../components/Game";
//styling and animation 
import styled from 'styled-components';
import { motion } from "framer-motion";

const Home = () => {
    //fetch games 
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(loadGames());
        });
        //get data back
        const games = useSelector(state => state.games);
        console.log(games);
    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}


export default Home;