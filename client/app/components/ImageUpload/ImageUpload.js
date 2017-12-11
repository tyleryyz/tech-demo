import React, { Component } from 'react';
import 'whatwg-fetch';

// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

AWS.config.update({
    accessKeyId: "AKIAIH5JQB27XBZSBYLA",
    secretAccessKey: "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",
});

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
//var bucketName = 'jjg297-' + uuid.v4();
var bucketName = 'jjg297-my-first-bucket/Images';
var keyName = 'hello_world.txt';
let file;
var filename;

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  // When the Upload image button is clicked
  _handleSubmit(e) {
    filename = this.state.file.name;
    e.preventDefault();
    // TODO: do something with -> this.state.file
    var params = {
                  Bucket: bucketName,
                  Key: this.state.file.name,
                  Body: file
                };

    s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " +
        bucketName + "/" + filename);
  });

    console.log('Handling uploading, data presented: ', this.state.file);
  }

  // This changes the 'Please select an Image for Preview'
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  // Render the screen in HTML
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  
export default ImageUpload;