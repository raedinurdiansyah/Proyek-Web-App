import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import css from './App.css';
import axios from 'axios';
import ProfilePage from './page/ProfilePage';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'C:/Users/RAEDI NURDIANSYAH/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';

import LandingPage from './page/LandingPage';
import Car from './page/Car';

class App extends Component {

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <div>
        <Route exact path="/" component={LandingPage}/> 
        <Route path="/Profilpage" component={ProfilePage}/>
        <Route path="/Car" component={Car}/>
      </div>
      </Provider>
        
        // {/* // <div>
        // //     <Route exact path="/" component={ProfilePage}/>
        // // </div> */}


    



    );
  }
}

export default App;
