import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MethodSwitcher from 'Presentational/MethodSwitcher';
import MethodsMain from 'Views/Methods/MethodsMain';
import MethodPage from 'Views/Methods/MethodPage';
import MethodConf from 'Views/Methods/ConfigPage';

const MethodsView = props => (
    <div>
        { window.location.pathname !== props.match.path && <MethodSwitcher/> }
        <Switch>
            <Route exact path={ props.match.path } component={ MethodsMain }/>
            <Route exact path={ `${props.match.path}/:methodId` } component={ MethodPage }/>
            <Route path={ `${props.match.path}/:methodId/conf` } component={ MethodConf }/>
        </Switch>
    </div>
);

export default MethodsView;
