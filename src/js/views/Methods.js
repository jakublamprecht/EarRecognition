import React from 'react';

import MethodSwitcher from 'Presentational/MethodSwitcher';
import ImageWithPicker from 'Presentational/ImageWithPicker';

const MethodsView = props => (
    <div>
        <MethodSwitcher/>
        <h1>Methods</h1>
        <ImageWithPicker id="test-canvas"/>
    </div>
);

export default MethodsView;
