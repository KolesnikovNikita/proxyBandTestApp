import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import fetchAllData from './api/user';

export async function render(url) {
    const data = await fetchAllData();

    let html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <StaticRouter location={url}>
                <App data={data} />
            </StaticRouter>
        </React.StrictMode>
    );

    html += `<script>window.data = ${JSON.stringify(data)}</script>`;
    return { html };
}
