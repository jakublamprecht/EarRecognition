import React from 'react';
import { Link } from 'react-router-dom';

const MethodsMain = props => (
    <div>
        <h1>Pick a method</h1>
        <ul>
            <li><Link to="/methods/method1">Concentric Circles</Link></li>
            <li><Link to="/methods/method2">Method duo</Link></li>
            <li><Link to="/methods/method3">Force Field Transform</Link></li>
            
        </ul>
    </div>
);

export default MethodsMain;
