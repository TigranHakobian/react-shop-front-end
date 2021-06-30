import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/bootstrap.min.css';
import './assets/styles/font-awesome.css';
import './assets/styles/style.css';


import reducers from './store/reducers'
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import watchers from './store/sagas'
import createSageMiddleware from 'redux-saga'

const saga = createSageMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(watchers);




ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
