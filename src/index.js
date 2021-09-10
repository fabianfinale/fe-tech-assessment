import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCartArrowDown,
  faCartPlus,
  faShoppingCart,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

const store = configureStore();
library.add(faShoppingCart, faCartPlus, faCartArrowDown, faStore);

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
