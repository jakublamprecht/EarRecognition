import React from 'react';
import { Link } from 'react-router-dom';

import ConcentricCirclesContent from 'Views/Methods/ConcentricCircles';
import Method2Content from 'Views/Methods/Method2';
import ForceFieldContent from 'Views/Methods/ForceField';

const getMethodContent = (methodId) => {
    switch(methodId) {
        case 'method1':
            return <ConcentricCirclesContent/>;
        case 'method2':
            return <Method2Content/>;
        case 'method3':
            return <ForceFieldContent/>;
        default:
            return <ConcentricCirclesContent/>
    }
};

const MethodPage = ({ match }) => (
    <div>
        { getMethodContent(match.params.methodId) }
        <Link to={ `${match.url}/conf` }>Configure</Link>
    </div>
);

export default MethodPage;
