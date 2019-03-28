import React from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../../redux/modules/posts';
import Post from '../../components/Post/index';
import './PostList.css';

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    deletePost: id => dispatch(deletePost(id)),
    editPost: post => dispatch(editPost(post))
})

const PostList = ({ posts, deletePost, editPost }) => {
    return (
        <>
          <div>Post List だお</div>
          {posts.map(post => (
              <Post key={post.id} {...post} onClick={() => deletePost(post.id)} />
          ))}
        </>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);
