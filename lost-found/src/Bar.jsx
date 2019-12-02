import React from 'react';
import Item from './Item';

class Bar extends React.Component {
  render() {
    const items = this.props.items.map(item => <Item item={item} />);
    return(
        <div className ="center-align blue-box">
            <ul>
                {items}
            </ul>
        </div>
    );
  }
}

export default Bar;
