import React, { Component } from "react";
import './App.css';
import SupplyList from "./Supplylist.js";

class App extends Component{
  render(){
    return(
      <div className="App">
        <SupplyList />
        </div>
    );
  }
}

export default App;
