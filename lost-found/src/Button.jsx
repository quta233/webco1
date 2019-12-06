import React from 'react';

class Button extends React.Component {
  render() {
    return(
        <div>
            <form action="https://quta233.github.io/webco-final/">
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
