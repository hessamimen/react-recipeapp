import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi'

function Logo() {
  return (
      <LogoStyle>
        <GiKnifeFork/>
        <LinkStyled to={'/'}>
            Hessam Recipessss 
        </LinkStyled>
        <GiKnifeFork/>
      </LogoStyle>
  )
}

export default Logo

//================= Styled Component==================


const LogoStyle = styled.div`
        padding: 2rem 0rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        svg {
            font-size: 2rem;
        }
        `
        const LinkStyled = styled(Link)`
                text-decoration: none;
                font-size: 2rem;
                font-weight: 600;
                margin: 0rem 0.5rem;
                font-family: 'Lobster Two', cursive;
            `