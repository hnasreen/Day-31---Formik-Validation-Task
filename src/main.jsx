import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/BookReducer/bookReducer.js';
import authorReducer from './features/AuthorReducer/authorReducer.js';

const store=configureStore({
  reducer:{
    books:bookReducer,
    authors:authorReducer,
   },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
