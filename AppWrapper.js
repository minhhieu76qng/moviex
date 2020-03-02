import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import store from './store';
import './middlewares/axios.mdw';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
