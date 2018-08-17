import React from 'react';
import { NavLink } from 'react-router-dom';

import TabsContainer from 'Containers/TabsContainer';
import Tab from './Tab';

const Header = props => (
    <header className="header">
        <nav>
            <TabsContainer>
                <Tab><NavLink to="/methods" activeClassName="active">Feature Extraction</NavLink></Tab>
                <Tab><NavLink to="/matching" activeClassName="active">Matching</NavLink></Tab>
                <Tab><NavLink to="/experiment" activeClassName="active">Experiment</NavLink></Tab>
            </TabsContainer>
        </nav>
    </header>
);

export default Header;
