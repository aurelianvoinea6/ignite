import React from "react";
//animation
import styled from "styled-components";
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
    return(
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>DAV Gaming</h1>
            </Logo>
                <div className="search">
                    <input type="text" />
                    <button>Search</button>
                </div>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        outline: none;
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        background: blueviolet;
        color: white;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
   
    img{
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;