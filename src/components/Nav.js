import React, { useState } from "react";
//animation
import styled from "styled-components";
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';
//redux and routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from "react-redux";
import {fadeIn} from '../animations';



const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };
    const clearSearched = () =>{
        dispatch({type: "CLEAR_SEARCHED"});
    }
    return(
        <StyledNav variants={fadeIn} initial='hidden' animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>DAV Gaming</h1>
            </Logo>
                <form className="search">
                    <input value={textInput} onChange={inputHandler} type="text" />
                    <button onClick={submitSearch} type="submit">Search</button>
                </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    display: inline;
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 40%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        border-radius: 1rem; 
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        outline: none;
        text-shadow:
    }
    button{
        font-size: 1.5rem;
        border: none;
        margin-left: 1rem;
        padding: 0.5rem 2rem;
        background: blueviolet;
        color: white;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        transition: all 0.3s ease;
        border-radius: 1rem;
    }
    button:hover{
        cursor: pointer;
        background: white;
        color: blueviolet;
        filter: drop-shadow(5px 5px 10px blueviolet);
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00, 2px 2px 0px rgba(122,29,206,0.54);
    img{
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;