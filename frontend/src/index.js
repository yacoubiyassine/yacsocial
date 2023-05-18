import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import { Provider } from 'react-redux';
import store from './redux/store';
import {} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <AuthContextProvider >
     <Provider store={store}>
      <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
  </BrowserRouter>
);

