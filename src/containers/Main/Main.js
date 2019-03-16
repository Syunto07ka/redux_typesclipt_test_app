import React, { Component } from 'react';
import './Main.css';
import NewPost from '../../components/NewPost';

class Main extends Component {
  render() {
    return (
      <div>
        <main>
            <p>
              Post Listだお
            </p>
            <NewPost />
        </main>
      </div>
    );
  }
}

export default Main;
