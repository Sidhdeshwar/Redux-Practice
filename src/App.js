import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeContainer from './container/HomeContainer';
import React from 'react';

function App() {

  return (
    <div className="App"> 
      <header className="App">
           <Header></Header>
      </header>
      <div>
          <HomeContainer></HomeContainer>
      </div>
    </div>
  );
}

export default App;
