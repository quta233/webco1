import React from 'react';

const ImageItem = props => (
    <a target="_blank" href= {props.image.web}>
        <img style={{width: props.image.width}} src={props.image.img} alt={props.image.text}/>
    </a>
);

export default ImageItem;
