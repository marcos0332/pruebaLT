
import React from 'react';
import './index.css';
import Menu from './components/menu';
import NavBars from './components/navbars';
import Home from './components/home';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
        <div className="container mt-3">
        </div>
          <div className="col-md-2">
          <center>  
          <Menu>
          </Menu>
          </center>
          </div>
          <div className="col-md-9 mt-2 mr-1">
            <NavBars/>
            <Home></Home>
          </div>
        </div>
     </div>
    </div> 
  );
}

export default App;
