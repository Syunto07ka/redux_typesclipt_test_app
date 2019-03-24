import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../redux/modules/posts';
import './PostList.css';

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    deletePost: id => dispatch(deletePost(id))
})

const postList = ({ posts, deletePost }) => {
    return (
        <>
          <div>Post List だお</div>
          <ul>
            {posts.map(post => (
                <li key={String(post.id)}>
                  {post.text}<button onClick={() => deletePost(post.id)}>削除</button>
                </li>
            ))}
          </ul>
        </>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(postList);
