import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

require('../scss/main.scss');

render(<App/>, document.getElementById('app'));
