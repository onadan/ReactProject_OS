import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { IPost } from './card';

const PostList:React.FC = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const results = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const data =results.data.filter((x:IPost)=>x.completed===true)
        console.log(data)
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPosts();
  }, []);

  return (
    <div>
      <h5 className=" text-center text-lg font-bold">POST LIST</h5>
      <div className='flex flex-row'>
      {posts.map((post: IPost) => (
        <ul key={post.id}>
          <Card title={post.title} completed={post.completed} />
        </ul>
      ))}

      </div>
  
    </div>
  );
};

export default PostList;
