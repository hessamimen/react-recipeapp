import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
//The "useParams" hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.


function Cuisine() {

    let ApiKeyYahoo = '63731e39bf0e4db3bd41e735dca6e96f';
    let ApiKeyGoogle = 'd0785e208518432984aaaada6a09e6b1';

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = (name) => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKeyYahoo}&number=9&cuisine=${name}`)
        .then(res => res.json())
        .then(data => setCuisine(data.results))
    }

    useEffect(() => {
        getCuisine(params.type)
        // console.log(cuisine) 
    }, [params.type])

  return (
    <Grid>
        {cuisine.map((item) => (
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

export default Cuisine