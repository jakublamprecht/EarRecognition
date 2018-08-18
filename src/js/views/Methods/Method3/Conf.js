import React from 'react';
import { Link } from 'react-router-dom';
import { getParentPath } from 'Core/utils';

const Method3Conf = ({ match }) => (
    <div>
        <h1>Method3 Conf</h1>
        <Link to={ getParentPath(match.path) }>Go back</Link>
    </div>
);

export default Method3Conf;
