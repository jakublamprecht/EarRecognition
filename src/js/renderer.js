import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../scss/main.scss';

import App from './components/App';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('app'));
