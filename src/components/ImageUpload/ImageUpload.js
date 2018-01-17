import React, { Component } from 'react';
import backend from '../../utils/backend';
import PropTypes from 'prop-types';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    // probably just put it in the store
    let imageFormData = new FormData();

    imageFormData.append('imageFile', this.state.file);
    this.props.addImage(imageFormData);
    // fetch(`${backend}/api/v1/users/${this.props.currentUser.id}/upload`, {
    //   method: 'POST',
    //   body: JSON.stringify(imageFormData),
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(res => console.log(res.status))
    //   .catch(error => { throw error; });
  }

  _handleImageChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="your avatar" />);
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
      </div>
    );
  }

}

export default ImageUpload;

ImageUpload.propTypes = {
  currentUser: PropTypes.object,
  addImage: PropTypes.func
};
