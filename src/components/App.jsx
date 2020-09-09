import React from 'react';
import {Provider} from "react-redux"
import AppRoutes from './AppRoutes';
import { createStore, applyMiddleware } from 'redux'; 
//import store from "./Redux/Store"

//const store = createStore(reducer)

const store = createStore (() => [], {}, applyMiddleware ());

const App = () => (
  <Provider store={store}>
    <AppRoutes/>
  </Provider>
)


//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


export default App;
