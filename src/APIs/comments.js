

export function getComments(recipeID) {
  return (
    fetch(`http://localhost:4000/comments?recipeID=${recipeID}`)
    .then(res => res.json())
    .then(data => data)
  )
}

export function AddComment(newComment, recipeID) {
  return (
    fetch(`http://localhost:4000/comments?recipeID=${recipeID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    }).then(res => res.json())
    .then(data => data)
    
  )
}

export function deleteComment(comment) {
  return (
    fetch(`http://localhost:4000/comments/${comment.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data)
  )
}


