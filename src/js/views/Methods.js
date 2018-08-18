import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MethodSwitcher from 'Presentational/MethodSwitcher';
import MethodsMain from 'Views/Methods/MethodsMain';
import Method1 from 'Views/Methods/Method1';
import Method2 from 'Views/Methods/Method2';
import Method3 from 'Views/Methods/Method3';
import Method1Conf from 'Views/Methods/Method1/Conf';
import Method2Conf from 'Views/Methods/Method2/Conf';
import Method3Conf from 'Views/Methods/Method3/Conf';

const MethodsView = props => (
    <div>
        { window.location.pathname !== props.match.path && <MethodSwitcher/> }
        <Switch>
            <Route exact path={ props.match.path } component={ MethodsMain }/>
            <Route exact path={ `${props.match.path}/method1` } component={ Method1 }/>
            <Route exact path={ `${props.match.path}/method2` } component={ Method2 }/>
            <Route exact path={ `${props.match.path}/method3` } component={ Method3 }/>
            <Route path={ `${props.match.path}/method1/conf` } component={ Method1Conf }/>
            <Route path={ `${props.match.path}/method2/conf` } component={ Method2Conf }/>
            <Route path={ `${props.match.path}/method3/conf` } component={ Method3Conf }/>
        </Switch>
    </div>
);

export default MethodsView;
