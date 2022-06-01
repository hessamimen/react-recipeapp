import React from 'react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

function Popular() {

    const [popular, setPopular] = useState([])
    
    useEffect(()=> {
        getPopular()
    },[]);   
    
    const getPopular = () => {
        const storeData = localStorage.getItem('popular');

        if(storeData) {
            //Use the JavaScript function "JSON.parse()" to convert text into a JavaScript object.
            setPopular(JSON.parse(storeData))
        } else {
            fetch('https://api.spoonacular.com/recipes/random?apiKey=d0785e208518432984aaaada6a09e6b1&number=9')
        .then(res => res.json())
        .then(data => {
            setPopular(data.recipes)
            //When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with "JSON.stringify()".
            localStorage.setItem('popular', JSON.stringify(data.recipes))
        })
        }
  
    }
    return (
        <Wrapper>
            <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem',
                }}>
            {popular.map(recipe => (
                <SplideSlide key={recipe.id}>
                    <Card >
                        <Link to={`/recipe/${recipe.id}`}>
                            <p >
                                {recipe.title}
                            </p>
                            <img src={recipe.image} alt={recipe.title} />
                        <Grandient />
                        </Link>
                    </Card>
                </SplideSlide>
            ))}
            </Splide>
    </Wrapper>
  )
}



//================= Styled Component==================

const Wrapper = styled.div`
/* margin: 4rem 0rem; */
border: 4px solid grey;
border-radius: 3rem;
padding: 1rem;
`;

const Card = styled.div`
    min-height: 20rem;
    border-radius: '2rem';
    overFlow: hidden;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        ${'' /* left: 50%; */}
        bottom: 0%;
        ${'' /* transform: translate(-50%, 0%) */}
        width: 100%;
        color: white;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;

const Grandient = styled.div`
    z-index: 3;
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

export default Popular

