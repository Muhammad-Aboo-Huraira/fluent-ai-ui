import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
  </Provider>
);