import React, {useEffect} from 'react';
import './App.css';
import RightBar from './RightBar';
function App() {



  return (
    <div className="App">
      <div className="header">Header</div>
      <div className="content">
        <div className="left-bar">Left bar</div>
        <div className="middle-bar">Middle bar</div>
        <div className="right-bar"><RightBar /></div>
      </div>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}

export default App;
