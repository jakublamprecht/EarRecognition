import React, { Component } from 'react';
import earRecognition from '../core/earProcessing'
import ImageWithPicker from './presentational/ImageWithPicker';

class App extends Component {
    componentDidMount() {
        console.log(earRecognition.hello());
        earRecognition.showImg();
    }

    render() {
        return (
            <div>
                <h1>This is fucking react, BITCH.</h1>
                <ImageWithPicker id="test-canvas"/>
            </div>
        );
    }
}

export default App;
