import React from "react";
import {withRouter} from 'react-router-dom';

const UploadPhotosContainer = (props) => {
    function handleClick(e) {
        e.preventDefault();
        const {history} = props;
        history.push("/home-page");

    }
    return (
        <div>
            <h1>Upload your best photos</h1>
            <h3>This is the upload photos container</h3>

            <div>Drag and drop here or upload</div>
            <button onClick={handleClick}> Continue</button>
        </div>
    )
}

export default withRouter(UploadPhotosContainer);