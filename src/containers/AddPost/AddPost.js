import React from 'react';
import { connect } from 'react-redux';
import './AddPost.css';
import { addPost } from '../../redux/modules/posts';

const AddPost = ({ dispatch }) => {
    let input

    return (
      <div>
        <form
          onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                  return
              }
              console.log(input.value)
              dispatch(addPost(input.value))
              input.value=''
          }}
        >
          <input type="string" ref={node => (input = node)} /><br />
          <button type="submit">投稿</button>
        </form>
      </div>
    )
}

export default connect()(AddPost);
