import React from 'react';
import { connect } from 'react-redux';
import './AddPost.css';
import { addPost } from '../../redux/modules/posts';

const AddPost = ({ dispatch }) => {
    let input = {
      content: '',
      name: '',
    }
    let content;
    let text;

    return (
      <div>
        <form
          onSubmit={e => {
              e.preventDefault()
              input.content = content.value
              input.name = text.value
              console.log(input)
              dispatch(addPost(input))
              content.value=''
              text.value=''
          }}
        >
          <input type="string" ref={node => (content = node)} /><br />
          <input type="string" ref={node => (text = node)} /><br />
          <button type="submit">投稿</button>
        </form>
      </div>
    )
}

export default connect()(AddPost);
