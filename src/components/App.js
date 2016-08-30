import React, { Component } from 'react';
import FileUploader from '/FileUploader'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super();

    this._submitFile = this._submitFile.bind(this);
  }

  _submitFile(file) {
    console.log('file:', file);

    let data = new FormData();

    data.append('image', file);

    axios.post('/api/images', data)
      .then(res => {
        console.log('res:', res);
      })
      .catch(console.error);
  }

  render() {
    return (
      <h1 className="text-center">Welcome to React!</h1>
      <FileUploader submitFile={this._submitFile}/>
    )
  }
}
