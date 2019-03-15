import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './components/home';
import {AboutUs} from './components/aboutUs';
import {WrongPath} from './components/wrongPath';
import {Header} from './components/header';
import {Sidebar} from './components/sidebar';
import './css/reset.css';
import './css/App.css';
import './css/animation.css';
import './css/sidebar.css';
import './css/header.css';
import './css/media.css';
import './fonts/fontawesome-pro-5.2.0-web/css/all.min.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header/>
          <Sidebar/>
          <Switch>
            <Route path="/aboutUs" component={AboutUs}/>
            <Route exact path="/" component={Home}/>
            <Route component={WrongPath}/>
          </Switch>
        </main>
      </BrowserRouter>
    );    
  }
}

export default App;
