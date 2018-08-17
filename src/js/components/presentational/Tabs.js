import React from 'react';

const Tabs = props => (
    <div className={ `tabs ${ props.className }` }>
        <ul className="tabs_nav">
            { props.children }
        </ul>
    </div>
);

export default Tabs;
