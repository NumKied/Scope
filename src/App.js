import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './components/home';
import {AboutUs} from './components/aboutUs';
import {WrongPath} from './components/wrongPath';
import {Header} from './components/header';
import {Sidebar} from './components/sidebar';
import {AddLinks} from './components/addLinks';
import './css/reset.css';
import './css/App.css';
import './css/animation.css';
import './css/sidebar.css';
import './css/header.css';
import './css/home.css';
import './css/addLinks.css';
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
            <Route path="/addLinks" component={AddLinks}/>
            <Route exact path="/" component={Home}/>
            <Route component={WrongPath}/>
          </Switch>
        </main>
      </BrowserRouter>
    );    
  }
  componentDidMount() {
    setTimeout(function () {
      var preloader = document.getElementsByClassName('preloader');
      preloader[0].classList.add('hidePreloader');   
    }, 500);
  }
}

export default App;
