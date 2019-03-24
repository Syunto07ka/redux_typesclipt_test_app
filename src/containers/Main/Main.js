import React, { Component } from 'react';
import './Main.css';
import PostList from '../PostList/PostList';
import AddPost from '../AddPost/AddPost';

class Main extends Component {
  render() {
    return (
      <div>
        <main>
            <PostList />
            <AddPost />
        </main>
      </div>
    );
  }
}

export default Main;
