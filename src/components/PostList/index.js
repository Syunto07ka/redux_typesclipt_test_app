import React from 'react';
import './index.css';

const postList = ({ posts, deletePost}) => {
    return (
        <>
          <div>Post List だお</div>
          <ul>
            {posts.map(post => (
                <li>{post}</li>
            ))}
          </ul>
        </>
    );
}

export default postList;
