import React, { Component } from 'react';
import FilePicker from './FilePicker';
import EarProcessing from 'EarProcessing';

class ImageWithPicker extends Component {
    constructor() {
        super();

        this.state = {
            imgPath: '',
            imgData: Object.create(ImageData)
        }

        this.handlePickerChange = this.handlePickerChange.bind(this);
        this.handleInvert = this.handleInvert.bind(this);
        this.redrawCanvas = this.redrawCanvas.bind(this);
    }

    redrawCanvas(dataArray) {
        const ctx = this.canvas.getContext('2d');
        const newImg = ctx.createImageData(this.canvas.width,this.canvas.height);

        console.log('New data', dataArray);

        newImg.data.set(dataArray);
        ctx.putImageData(newImg, 0, 0);
    }

    handlePickerChange(event) {
        const file = event.target.files[0];

        if (file) {
            const self = this;
            const canvas = self.canvas;
            const img = new Image();
            const ctx = canvas.getContext('2d');

            img.src = file.path;
            img.onload = function () {
                canvas.width = this.width;
                canvas.height = this.height;
                ctx.drawImage(img, 0, 0);

                self.setState({ imgData: ctx.getImageData(0, 0, this.width, this.height), imgPath: file.path });
            };
        }
    }

    handleInvert() {
        const ctx = this.canvas.getContext('2d');
        const w = this.canvas.width;
        const h = this.canvas.height;

        console.log('Current data', ctx.getImageData(0, 0, w, h).data);

        EarProcessing.invertColors(ctx.getImageData(0, 0, w, h)).then(this.redrawCanvas);
    }

    render() {
        return (
            <div className="image">
                <canvas ref={ el => { this.canvas = el } }
                    id={ this.props.id }
                    width="450"
                    height="650">
                </canvas>
                <FilePicker
                    label="Pick an image!"
                    inputName="image-picker"
                    handleChange={ this.handlePickerChange }/>
                <button onClick={ this.handleInvert }>Invert colors</button>
            </div>
        );
    }
};

export default ImageWithPicker;
