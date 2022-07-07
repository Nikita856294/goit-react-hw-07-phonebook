import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from 'redux/store/store';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <App />
    </Provider>
  </React.StrictMode>
);
