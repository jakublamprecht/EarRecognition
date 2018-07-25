import React, { Component } from 'react';
import earRecognition from '../core/earProcessing'
import ImageWithPicker from './presentational/ImageWithPicker';

class App extends Component {
    componentDidMount() {
        console.log(earRecognition.hello());
    }

    render() {
        return (
            <div>
                <h1>Stuff</h1>
                <ImageWithPicker id="test-canvas"/>
            </div>
        );
    }
}

export default App;
