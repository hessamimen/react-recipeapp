import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getComments, AddComment, editComment, deleteComment } from '../APIs/comments';

function Comments(recipe) {

   let recipeID = recipe.recipe.id
//============= get Comments ============
   const [commnets, setComments] = useState([])
   
   useEffect(() => {
       getComments(recipeID)
       .then(commnets => setComments(commnets) ) 
    //    console.log(commnets) 
    }, [])
    
//============= Add Comments=============
    const [newComment, setNewcomment] = useState({
        recipeID: recipeID,
        authur: "",
        opinion: ""
      }); 
    const handleChange = (e) => {
        setNewcomment({
         ...newComment, 
          [e.target.name]: e.target.value,
          recipeID: recipeID
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault(); 
        if(newComment.authur !=='' && newComment.opinion !== '') {
            AddComment(newComment, recipeID)
            // getComments(recipeID)
            .then(newItem => setComments([
                ...commnets,
                newItem
            ]
            ))
        } else {
            alert('PLEASE FILL ALL SECTIONS')
        }


        // getComments(recipeID)
        // .then(commnets => setComments(commnets)) 
        setNewcomment({
            authur: "",
            opinion: "" 
        })
      }
      
      //========= Delete Comment =========
  
    //  const handleDelete = (id) => {
    //       deleteComment(id)
    //       getComments(recipeID)
    //     .then(commnets => setComments(commnets)) 
    //   }    
      
      return (
          <div> 
            <CommentDiv>
                <h4>Add Your Comment</h4> 
                <form onSubmit={handleSubmit}>
                <h5>Your Name</h5> 
                    <input type="text" id='name' name='authur' value={newComment.authur} onChange={handleChange} />
                <h5>Your Comment</h5> 
                    <input type="text" id='comment' name='opinion' value={newComment.opinion} onChange={handleChange} />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
        </CommentDiv>
        <CommentDiv>
            {commnets.map(comment => (
                <div key={comment.id}>

                    <h4>{comment.authur}:</h4> 
                    <p>{comment.opinion}</p>
                    <button onClick={() => deleteComment(comment)}>Delete</button>
                </div>
            ))}
        </CommentDiv>
    </div>
      
  )
}


//================= Styled Component==================
const CommentDiv = styled.div`
        margin-top: 1rem;
        background: linear-gradient(90deg, rgba(70,70,70,0.2), rgba(0,0,0,0.3));
        border-radius: 2rem;
        padding-left: 1rem;
        min-width: 40ch;


        h4 {
            padding-top: 2rem;
            margin-bottom: 1rem;
        }
        h5 {
            padding: 0.5rem;
        }
        input {
            background: linear-gradient(-90deg, rgba(50,50,50,0.2), rgba(0,0,0,0.3));
            border: none;
            outline: none;
            border-radius: 2rem;
        }
        input#name {
            padding: 1rem;
        }
        input#comment {
            width: 90%;
            height: 5rem;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        button {
            padding: 0.5rem;
            border: none;
            border-radius: 1rem;
            margin-bottom: 1rem;
            cursor: pointer;
        }
    `



export default Comments