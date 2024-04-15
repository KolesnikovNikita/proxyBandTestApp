import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import fetchAllData from './api/user';
import { HelmetProvider } from 'react-helmet-async';

export async function render(url) {
    const data = await fetchAllData();
    const helmetContext = {};
    let html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <StaticRouter location={url}>
                <HelmetProvider context={helmetContext}>
                    <App data={data} />
                </HelmetProvider>
            </StaticRouter>
        </React.StrictMode>
    );

    const { helmet } = helmetContext;

    console.log(helmetContext);

    html += `<script>window.data = ${JSON.stringify(data)}</script>`;
    return { html, head: `${helmet.title.toString()} ${helmet.meta.toString()}` };
}
