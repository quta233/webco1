import React from 'react';
import Title from './Title';
import Bar from './Bar';
import Desc from './Desc';
import Button from './Button';
import Image from './Image';
import './App.css';

class App extends React.Component {
  state = {
    items: [
      { name: 'Search', web: "http://localhost:3003/" },
      { name: 'Report', web: "http://localhost:3003/" },
      { name: 'Location', web: "http://localhost:3003/" },
      { name: 'Time', web: "http://localhost:3003/" }
    ],

    images: [
      { width: 200, img: "https://m.media-amazon.com/images/M/MV5BZDFhMWUxNzAtNjNhNi00MDM0LTljODItNjZjMTA3MjA2YzUwXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_UY268_CR1,0,182,268_AL_.jpg", web: "http://localhost:3003/", text: "Report Lost"},
      { width: 300, img: "http://www.salinayoon.com/FOUND_files/shapeimage_2.png", web: "http://localhost:3003/", text: "Report Found"}
    ]
  };

  render() {
    return (
      <div>
        <Title/>
        <Bar items={this.state.items}/>
        <Button/>
        <Desc/>
        <Image images={this.state.images}/>
      </div>
    );
  }
}

export default App;
