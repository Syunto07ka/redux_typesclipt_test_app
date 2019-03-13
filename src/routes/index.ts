import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import App from '../containers/App/App'

const routes = () => {
    render() {
        return (
            <Router>
              <Route path="/" component={App} />
            </Router>
        );
    }
}
