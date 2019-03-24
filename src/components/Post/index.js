import React from 'react';

const Post = ({ text, id, onClick }) => {
    if (!text) {
        return (
            <div></div>
        );
    } else {
        return (
            <div>
                {text}<button onClick={onClick}>削除</button>
            </div>
        );
    }
}

export default Post;
