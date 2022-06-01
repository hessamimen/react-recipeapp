import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Comments from '../components/Comments'

function Recipe() {
    let ApiKeyYahoo = '63731e39bf0e4db3bd41e735dca6e96f';
    let ApiKeyGoogle = 'd0785e208518432984aaaada6a09e6b1';

    let params = useParams()
    const [recipe, setRecipe] = useState({})

    const getRecipe = () => { 

        fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${ApiKeyYahoo}`)
        .then(res => res.json())
        .then(data => setRecipe(data)) 
    }
    
    useEffect(() => {
        getRecipe()
    }, [params.id])
    
    return (
    <Wrapper>
        <div>
        <h2> {recipe.title} </h2>
        <img src={recipe.image} alt="" />
        <Comments recipe={recipe} />
        </div>
        <Info>
            <h2>Instructions</h2>
            <div>
                <p dangerouslySetInnerHTML={{__html:recipe.summary}}></p>
                <p dangerouslySetInnerHTML={{__html:recipe.instructions}}></p>
            </div>
            <h2>Ingredients</h2>
            <ul>
                {recipe.extendedIngredients?.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.original}
                        </li>
                ))} 
            </ul>
        </Info>
    </Wrapper>
  )
}

//================= Styled Component==================

const Wrapper = styled.div`
        /* margin: 5rem; */
        /* margin-bottom: 5rem; */
        display: flex;
        
        h2 {
            margin: 2rem 0;
        }
        p {
            font-size: 1.2rem;
        }

        li {
            font-size: 1.2rem;
            line-height: 2.5rem;
        }
        ul {
            margin-top: 2rem;
        }
        img{
            border-radius: 2rem;
        }
        `

         const Info = styled.div`
            margin-left: 2rem;
            `   

export default Recipe










  // const storeData = localStorage.getItem('recipe');

    // if(storeData) {
    //     //Use the JavaScript function "JSON.parse()" to convert text into a JavaScript object.
    //         setRecipe(JSON.parse(storeData))
    //     } else {
    //         fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${ApiKeyYahoo}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setRecipe(data)
    //         //When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with "JSON.stringify()".
    //         localStorage.setItem('recipe', JSON.stringify(data))
    //     })
    //     }