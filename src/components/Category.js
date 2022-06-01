import React from 'react';
import {FaPizzaSlice} from 'react-icons/fa';
import {GiHamburger, GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//========Top NavBar (Italian - American - Thai - Chinese)========
function Category() {
  return (
    <List>
        <StyledLink to={'/cuisine/Italian'} >
            <FaPizzaSlice />
            <h4>Italian</h4>
        </StyledLink>
        <StyledLink to={'/cuisine/American'}>
            <GiHamburger />
            <h4>American</h4>
        </StyledLink>
        <StyledLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </StyledLink>
        <StyledLink to={'/cuisine/Chinese'}>
            <GiChopsticks />
            <h4>Chinese</h4>
        </StyledLink>

    </List>
  )
}

//================= Styled Component==================
const List = styled.div`
        display: flex;
        justify-content: center;
        margin: 2rem 0rem;
        gap: 1rem;
    `
const StyledLink = styled(NavLink)`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        text-decoration: none;
        background: linear-gradient(30deg, rgba(0,0,0,0), rgba(5,5,5,0.5));
        width: 6rem;
        height: 6rem;
        transform: scale(0.8);

        h4 {
            color: rgb(100,100,100);
            font-size: 1.1rem;

        }

        svg {
            color: rgb(100,100,100);
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        &.active{
            background: linear-gradient(70deg,rgba(0,0,0,0), rgba(0,10,0,0.8));
            border: 2px solid black;
            svg{
                color: black;
            }
            h4 {
                color: black;
            }
        }
        
` 

export default Category