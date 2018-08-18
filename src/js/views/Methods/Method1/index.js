import React from 'react';
import { Link } from 'react-router-dom';

const Method1 = ({ match }) => (
    <div>
        <h1>Method1</h1>
        <Link to={ `${match.path}/conf` }>Configure</Link>
    </div>
);

export default Method1;
