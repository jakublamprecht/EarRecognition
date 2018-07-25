import React, { Component } from 'react';
import FilePicker from './FilePicker';

class ImageWithPicker extends Component {
    constructor() {
        super();

        this.state = {
            imgPath: '',
            imgData: Object.create(ImageData)
        }

        this.handlePickerChange = this.handlePickerChange.bind(this);
    }

    handlePickerChange(event) {
        const file = event.target.files[0];

        if (file) {
            const img = new Image();
            const ctx = this.canvas.getContext('2d');

            img.src = file.path;
            img.onload = function () {
                ctx.drawImage(img, 0, 0);
            };

            this.setState({ imgData: ctx.getImageData(0, 0, 450, 650), imgPath: file.path });
        }
    }

    render() {
        return (
            <div className="image component">
                <canvas ref={ el => { this.canvas = el } }
                    id={ this.props.id }
                    width="450"
                    height="650">
                </canvas>
                <FilePicker
                    label="Pick an image!"
                    inputName="image-picker"
                    handleChange={ this.handlePickerChange }/>
            </div>
        );
    }
};

export default ImageWithPicker;
