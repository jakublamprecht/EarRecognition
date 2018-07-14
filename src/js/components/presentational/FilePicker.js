import React from 'react';

const FilePicker = props => (
    <div className="filePicker">
        <label className="filePicker_label" htmlFor={props.inputName}>
            {props.label}
        </label>
        <input
            id={props.inputName}
            className="filePicker_input"
            type="file"
            name={props.inputName}
            onChange={props.handleChange}
            accept=".gif,.jpg,.png"
        />
    </div>
);

export default FilePicker;
