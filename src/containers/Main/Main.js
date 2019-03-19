import React, { Component } from 'react';
import './Main.css';
import PostList from '../../components/PostList';
import NewPost from '../../components/NewPost';

class Main extends Component {
  render() {
    return (
      <div>
        <main>
            <PostList />
            <NewPost />
        </main>
      </div>
    );
  }
}

export default Main;
