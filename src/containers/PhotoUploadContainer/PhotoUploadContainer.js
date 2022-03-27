import React, { Fragment } from 'react';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';

const PhotoUploadContainer = () => {
    return (
        <div>
            <h1>Upload your best photos</h1>
            <h3>Adding pictures is a great way to show off your personality</h3>
            <PhotoUpload/>
            <div>Submit</div>
            <div>Facebook icon</div>
            <div>Instagram icon</div>
            <span>We accept JPGs and PNGs up to 128MB</span>
        </div>
    )
}

export default PhotoUploadContainer