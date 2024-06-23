import React, { useState, useEffect } from 'react';
import Loading from './loadind';
import Avatar from 'react-avatar';
import './App.css';

const App = () => {

  const [postId, setPostId] = useState(3);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);



  const handleButtonClick = async () => {
    setLoading(true);
    
    const randomId = Math.floor(Math.random() * 10) + 1;
    setPostId(randomId);
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}/comments`);
      
      if (!response.ok) {
        throw new Error('Response was not ok');
      }
      
      const data = await response.json();
      setComments(data);
      
    } catch (error) {
      throw new Error('Response was not ok');
    } 
      setLoading(false);
    
  };
  
 

  const profile = (email) => {
    return email.charAt(0).toUpperCase();
  };
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
   
        <center>
          <button onClick={handleButtonClick}>Generate Random Post ID</button>
         <h2>Random PostId:{postId}</h2> </center>
    <div className="App">

      {loading ? (
              <Loading/>
      ) : (
        
   
        <ul className="emailList">
         
          {comments.map((key) => (
            <>
     
      <div className='profile'>
        <div className="avatar" style={{ backgroundColor: generateRandomColor() }}>
          {profile(key.email)}
        </div>
        <h3><strong>{key.email}</strong></h3>
      </div>
      <div className="text">
        <p>{key.body}</p>
      </div>
   
  
              
                   </> ))}
        </ul>  
      )}
    </div>
    </>
  );
};

export default App;
