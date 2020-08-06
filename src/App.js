import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button,Steps } from "antd";
import "./App.css";
import Login from './Comonents/login';
import Header from './Comonents/header';
import Document from './Comonents/document';



const { Step } = Steps;

function App() {
  return (
    <div className="App">
      <Header/>
     <Login/>
     
    </div>
  );
}

export default App;
