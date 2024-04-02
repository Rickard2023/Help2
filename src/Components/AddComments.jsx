import React, { useEffect } from 'react'

export default function AddComments(props) {

  const ENDPOINT = `https://striveschool-api.herokuapp.com/api/comments`


  async function postComment(comment,rate)
  {

    let commentData = 
    {
      "comment": comment,
      "rate": rate,
      "elementId": props.asin
    }

    const rawResponse = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY3MmMyMjY0NGYxYjAwMTk1MmRmNjYiLCJpYXQiOjE3MTIwNjQyODYsImV4cCI6MTcxMzI3Mzg4Nn0.hH8z3VA8xb-jRgHYlaHokMNaA78h0TkPUP6ziV8Mick",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
      
    });
    const content = await rawResponse.json();
  
    console.log(commentData);
  }

  return (
    <>
    <textarea className="commentbox">

    </textarea>
    <button onClick={() => {
    
    let text = document.getElementsByClassName("commentbox");
    if(text){
      let comment = text.value;
      let rate = 3;
      console.log(text.value);
      postComment(comment,rate)
    }
    }}>
    Post
      
      </button>
    </>
    
  )
}
