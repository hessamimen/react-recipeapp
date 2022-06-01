import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

    let ApiKeyYahoo = '63731e39bf0e4db3bd41e735dca6e96f';
    let ApiKeyGoogle = 'd0785e208518432984aaaada6a09e6b1';

    const [searchedItem, setSearchedItem] = useState([])
    let params = useParams()

    const getSearched = (name) => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKeyYahoo}&number=9&query=${name}`)
        .then(res => res.json())
        .then(data => setSearchedItem(data.results))
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])


  return (
    <Grid>
        {searchedItem.map((item) => (
            <Card key={item.id}>
                <Link to={`/recipe/${item.id}`}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                </Link>
            </Card>
        ))}
    </Grid>
  )
}





//================= Styled Component==================

const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 3rem;
    `

const Card = styled.div`
        img{
            width: 100%;
            border-radius: 2rem;
        }
        a{
            text-decoration: none;
        }
        h4{
            text-align: center;
            padding: 1rem;
        }
    `

export default Searched