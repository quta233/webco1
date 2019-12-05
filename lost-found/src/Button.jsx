import React from 'react';

class Button extends React.Component {
  render() {
    return(
        <div>
            <form action=" http://localhost:3003/">
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
