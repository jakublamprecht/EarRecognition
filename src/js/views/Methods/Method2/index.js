import React from 'react';
import { Link } from 'react-router-dom';

const Method2 = ({ match }) => (
    <div>
        <h1>Method2</h1>
        <Link to={ `${match.path}/conf` }>Configure</Link>
    </div>
);

export default Method2;
