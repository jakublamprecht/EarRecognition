import React from 'react';
import { Link } from 'react-router-dom';
import { getParentPath } from 'Core/utils';

const Method2Conf = ({ match }) => (
    <div>
        <h1>Method2 Conf</h1>
        <Link to={ getParentPath(match.path) }>Go back</Link>
    </div>
);

export default Method2Conf;
