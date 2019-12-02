import React from 'react';

const Item = props => (
  <li>
      <a href= {props.item.web}>
          {props.item.name}
      </a>
  </li>
);

export default Item;
