import React from 'react';

class Button extends React.Component {
  render() {
    return(
        <div>
            <form action="/dummy-server">
            <label>
            Search for lost items
                <input type="text" placeholder="books, phones, keys, etc."/>
                <button type="submit">Search</button>
            </label>
            </form>
        </div>
    );
  }
}

export default Button;
