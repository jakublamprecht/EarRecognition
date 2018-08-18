import React from 'react';
import { Link } from 'react-router-dom';
import { getParentPath } from 'Core/utils';

import ConcentricCirclesConfig from 'Views/Methods/ConcentricCircles/ConfigContent';
import Method2Config from 'Views/Methods/Method2/ConfigContent';
import ForceFieldConfig from 'Views/Methods/ForceField/ConfigContent';

const getMethodConfigContent = (methodId) => {
    switch(methodId) {
        case 'method1':
            return <ConcentricCirclesConfig/>;
        case 'method2':
            return <Method2Config/>;
        case 'method3':
            return <ForceFieldConfig/>;
        default:
            return <ConcentricCirclesConfig/>
    }
};

const ConfigPage = ({ match }) => (
    <div>
        { getMethodConfigContent(match.params.methodId) }
        <Link to={ getParentPath(match.url) }>Go back</Link>
    </div>
);

export default ConfigPage;
