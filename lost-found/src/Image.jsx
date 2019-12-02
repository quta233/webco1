import React from 'react';
import ImageItem from './ImageItem';

class Image extends React.Component {
  render() {
    const images = this.props.images.map(image => <ImageItem image={image} />);
    return(
        <div className ="center-align downside-border">
            <h2 >Report Items</h2>
            <div>
                {images}
            </div>
        </div>
    );
  }
}

export default Image;
