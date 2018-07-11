import React, { Component } from 'react';
import earRecognition from '../core/earProcessing'

class App extends Component {
    componentDidMount() {
        console.log(earRecognition.hello());
    }

    render() {
        return (
            <h1>This is fucking react, BITCH.</h1>
        );
    }
}

export default App;
