import React from 'react';
import TabsContainer from 'Containers/TabsContainer';
import Tab from 'Presentational/Tab';

const MethodSwitcher = props => (
    <TabsContainer className="methodSwitcher">
        <Tab>Concentric Circles</Tab>
        <Tab>Method duo</Tab>
        <Tab>Force Field Transform</Tab>
    </TabsContainer>
);

export default MethodSwitcher;
