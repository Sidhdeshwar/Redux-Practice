import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeContainer from './container/HomeContainer';
import React from 'react';

function App() {

  return (
    <div className="App"> 
      <header className="App">

        <h1>Git Hub - Created New-Branch</h1>
        
           <Header></Header>
      </header>
      <div>
          <HomeContainer></HomeContainer>
      </div>
    </div>
  );
}

export default App;
