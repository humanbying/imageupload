import React, { Component } from 'react';

export default class FileUploader extends Component {
  constructor() {
    super();

    this.state = {
      file: '',
      imagePreviewUrl: ''
    };

    this._onInputChange = this._onInputChange.bind(this);
  }

  _onSubmit(e) {
    e.preventDefault();

    console.log('this.state.file:', this.state.file);
  }


  _onInputChange(e) {

    let reader = new FileReader();
    console.log('e.target:', e.target);

    let file = e.target.files[0];

    console.log('files:', files);

    reader.onloadend = () => {
      console.log('reader.result:', render.result)
      this.setState({
        file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file)
  }

  render() {

    let { imagePreviewUrl} = this.state;

    let ImagePreview = imagePreviewUrl && <img src = {imagePreviewUrl} />

    return (
      <div>

      <form>
        <input type="file" name="" onChange={this._onInputChange} />
        <button>Upload</button>
      </form>

      { ImagePreview }
      </div>
    )
  }
}
