import React from 'react';
import { Link } from 'react-router-dom';

const Method3 = ({ match }) => (
    <div>
        <h1>Method3</h1>
        <Link to={ `${match.path}/conf` }>Configure</Link>
    </div>
);

export default Method3;
