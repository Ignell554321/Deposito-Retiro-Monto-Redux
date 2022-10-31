import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import operacionMontoReducer from './componentes/comp-redux/features/operacionMonto';
import MontoUI from './componentes/comp-redux/MontoUI';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const store =configureStore({
  reducer:{
    monto:operacionMontoReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <MontoUI />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
