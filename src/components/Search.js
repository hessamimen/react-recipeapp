import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import {ImSearch} from 'react-icons/im';

function Search() {

    const [input, setInput] = useState('');

    //The useNavigate hook returns a function that lets you navigate programmatically, for example after a form is submitted.
    let navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
        setInput('')
    }

  return (
    <FormStyled onSubmit={handleSubmit}>
        <ImSearch />
        <input onChange={handleChange} type="text" value={input} />
    </FormStyled>
  )
}



//================= Styled Component==================

const FormStyled = styled.form`
        margin: 0 auto;
        position: relative;
        width: 40%;

        input {
            border: none;
            background: linear-gradient(35deg, rgba(49,49,49,0.3), rgba(31,31,31,0.6));
            font-size: 1.5rem;
            color: white;
            padding: 0.5rem 4rem;
            border-radius: 2rem;
            outline: none;
            width: 100%;
        }
        svg {
            position: absolute;
            top: 30%;
            left: 2%;
            /* transform: translate(100%, -50%); */
            color: white;
            font-size: 1.5rem;
        }
    `

export default Search