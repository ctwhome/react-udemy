import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers';

import PostsIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore,
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={PostNew} />
        <Route path="/posts/:id" component={PostShow} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'),
);
