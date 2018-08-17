import React, { Component } from 'react';
import Tabs from 'Presentational/Tabs';

class TabsContainer extends Component {
    super() {
        this.super();
    }

    render() {
        return (
            <Tabs className={ this.props.className ? this.props.className : '' }>
                { this.props.children }
            </Tabs>
        );
    }
}

export default TabsContainer;
