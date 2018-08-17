import React from 'react';
import { NavLink } from 'react-router-dom';

import TabsContainer from 'Containers/TabsContainer';
import Tab from 'Presentational/Tab';

const MethodSwitcher = props => (
    <TabsContainer className="methodSwitcher">
        <Tab><NavLink to="/methods/method1" activeClassName="active">Concentric Circles</NavLink></Tab>
        <Tab><NavLink to="/methods/method2" activeClassName="active">Method duo</NavLink></Tab>
        <Tab><NavLink to="/methods/method3" activeClassName="active">Force Field Transform</NavLink></Tab>
    </TabsContainer>
);

export default MethodSwitcher;
