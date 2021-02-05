import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import store from './redux/store';
import './index.scss';

const reactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={LayoutPage} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(reactElement, document.getElementById('root'));
