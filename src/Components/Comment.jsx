import React from 'react'

export default function Comment(el) {

  console.log(el.comment.author , el.comment.rate, el.comment.comment);
  console.log(el);
  return (
    
    <>
    <h4 style={{color: "red"}}>
      {el.comment.author}
    </h4>
    <h5 style={{color: "gold"}}>
      {el.comment.rate} stars
    </h5>
    <h6>
      {el.comment.comment}
    </h6>
    
    </>
 
  )
}
