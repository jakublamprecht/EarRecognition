import React from 'react';
import { Link } from 'react-router-dom';

import TabsContainer from 'Containers/TabsContainer';
import Tab from './Tab';

const Header = props => (
    <header className="header">
        <nav>
            <TabsContainer>
                <Tab><Link to="/methods">Feature Extraction</Link></Tab>
                <Tab><Link to="/matching">Matching</Link></Tab>
                <Tab><Link to="/experiment">Experiment</Link></Tab>
            </TabsContainer>
        </nav>
    </header>
);

export default Header;
