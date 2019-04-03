import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './containers/PostList/PostList';
import AddPost from './containers/AddPost/AddPost';


const route = () => {
    return (
        <Router>
            <Route path="/" component={PostList} />
            <Route path="/new_post" component={AddPost} />
        </Router>
    );
}

export default route;
