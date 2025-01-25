import './App.css'
import React from 'react';
import { Provider } from 'react-redux';

//import { Provider } from "react-redux";
import store from "./Store/store";

import Navigator from './Components/Navigation/Navigator.jsx';
import Router from './Components/Navigation/Router.jsx';

function App() {
  

  return (
    <Provider store={store}>
      <Navigator />
      <Router />
    </Provider>
  )
}


export default App;



