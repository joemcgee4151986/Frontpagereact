import React from 'react';
import axios from 'axios';
import './App.css';

const baseURL= "https://api.ipify.org?format=json";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() =>{
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <h1>{post.ip}</h1>
      <p>{post.ip}</p>
    </div>
  );
}

