import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../redux/modules/posts';
import './index.css';

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(deletePost())
})

const postList = ({ posts, deletePost }) => {
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(postList);
