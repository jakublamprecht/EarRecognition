import React from 'react';
import { hot } from 'react-hot-loader';

import Header from 'Presentational/Header';
import Main from 'Views/Main';

const App = () => (
    <div>
        <Header/>
        <Main/>
    </div>
)

export default hot(module)(App);
