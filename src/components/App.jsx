import React from 'react';
import Card from './card/card';

function App() {
  const appStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#282c34',
  };
  return (
    <div className='App' style={appStyle}>
      <Card title='Card title' img='https://picsum.photos/200/300'>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </Card>
      <Card title='Card another title'>
        <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>
        <p class='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' class='card-link'>
          Card link
        </a>
        <a href='#' class='card-link'>
          Another link
        </a>
      </Card>
    </div>
  );
}

export default App;
