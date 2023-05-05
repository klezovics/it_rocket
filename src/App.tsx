import React from 'react';
import logo from './assets/img/rocket.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <img style={{width: '200px', height:'200px'}} src={logo} alt="logo"/>
            <p>Prepare to fly on the IT-rocket!</p>
            <p>This will be a great journey!</p>
        </div>
    );
}

export default App;
