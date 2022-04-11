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
        }, [dispatch]);
        //get data back
        const {popular, newGames, upcoming} = useSelector(state => state.games);
        
       
    return(
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game => (
                    <Game name={game.name} released={game.released} id={game.id} 
                    image={game.background_image}
                    key={game.id}
                    />
                ))}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)``;
const Games = styled(motion.div)``;


export default Home;