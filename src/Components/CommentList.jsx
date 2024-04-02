import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import AddComments from './AddComments';

export default function CommentList(props) {

  const {title,asin,id, showForm} = props;
  const ENDPOINT = `https://striveschool-api.herokuapp.com/api/books/`+asin+`/comments`;

  const [comments, setComments] = useState(false);

  let list = null;
  const fetchComments = async () => {
    let response = await fetch(ENDPOINT);
    let results = await response.json();
   
    setComments(results || []);
  };

  useEffect(() => {
    fetchComments();
  },[]);

  useEffect(() => {

  },[comments]);

  return (
    <> 
    {comments.length > 0 && 
      
      (comments.map((el) =>
        <Comment
        comment = {el}
        />
      ))    
    }   
    </>    
  );
}
