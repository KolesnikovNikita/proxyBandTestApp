import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App data={window.data} />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);
