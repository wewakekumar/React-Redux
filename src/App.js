import './App.css';
import React from 'react';
import {connect} from 'react-redux';
const App=(props)=> {
  return (
    <div className="App">
      <div className="Header">
        <h1>Counter:{props.ctr}</h1>
      </div>
      <div>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Add</button>
        <button>Subtract</button>
      </div>
    </div>
  );
}

const mapStatesToProps=(state)=>{
  return{ctr:state.counter}
}

export default connect(mapStatesToProps)(App);
