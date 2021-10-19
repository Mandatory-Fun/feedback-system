import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

import { Provider } from 'react-redux';
import makeStore from './redux/store';
import { BrowserRouter } from 'react-router-dom';

try {
  const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE as string);
  initializeApp(firebaseConfig);
} catch (e) {
  throw new Error(
    `Can't read from .env file. Please check if .env file exists or JSON config integrity inside .env file. - ` +
      e
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={makeStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
