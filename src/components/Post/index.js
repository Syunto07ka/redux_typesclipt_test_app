import React from 'react';

const Post = ({ content, name, id, onClick }) => {
    if (!content) {
        return (
            <div></div>
        );
    } else {
        return (
            <div>
                <div>コンテント: {content}</div>
                <div>名前: {name}</div>
                <button onClick={onClick}>削除</button>
            </div>
        );
    }
}

export default Post;
