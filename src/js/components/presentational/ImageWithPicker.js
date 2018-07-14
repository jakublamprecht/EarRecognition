import React, { Component } from 'react';
import FilePicker from './FilePicker';

class ImageWithPicker extends Component {
    constructor() {
        super();

        this.ctx = {};
        this.state = {
            imgPath: '',
            imgData: Object.create(ImageData)
        }

        this.handlePickerChange = this.handlePickerChange.bind(this);
    }

    componentDidMount() {
        this.ctx = document.getElementById(this.props.id).getContext('2d');
    }

    handlePickerChange(event) {
        const file = event.target.files[0];
        const img = new Image();
        const ctx = this.ctx;

        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = file.path;

        this.setState( {imgData: ctx.getImageData(0, 0, 450, 650), imgPath: file.path} );
    }

    render() {
        return (
            <div className="image component">
                <canvas id={this.props.id} width="450" height="650"></canvas>
                <FilePicker
                    label="Pick an image!"
                    inputName="image-picker"
                    handleChange={this.handlePickerChange}
                />
            </div>
        );
    }
};

export default ImageWithPicker;
