import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MethodSwitcher from 'Presentational/MethodSwitcher';
import MethodsMain from 'Views/Methods/MethodsMain';
import Method1 from 'Views/Methods/Method1';
import Method2 from 'Views/Methods/Method2';
import Method3 from 'Views/Methods/Method3';

const MethodsView = props => (
    <div>
        <MethodSwitcher/>
        <Switch>
            <Route exact path={ props.match.path } component={ MethodsMain }/>
            <Route path={ `${props.match.path}/method1` } component={ Method1 }/>
            <Route path={ `${props.match.path}/method2` } component={ Method2 }/>
            <Route path={ `${props.match.path}/method3` } component={ Method3 }/>
        </Switch>
    </div>
);

export default MethodsView;
