import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import LogoIcon from '../img/LogoIcon.svg';
import HomeIcon from '../img/homeIcon.svg';
import MyPageIcon from '../img/myPage.svg';
import AboutUs from '../img/aboutUsFull.svg';
import Add from '../img/add.svg';

export class Sidebar extends Component {
  handleClick() {
    var sidebar = document.getElementsByClassName('sidebar');
    var header = document.getElementsByTagName('header');
    header[0].classList.toggle('hideHeader');
    sidebar[0].classList.toggle('sidebar-active');
    var closeSidebar = document.getElementsByClassName('sidebar-close');
    closeSidebar[0].classList.toggle('activeSidebar-close');
  }

  render() {
    return (
      <React.Fragment>
        <div className="sidebar-close" onClick={this.handleClick}>
          <span></span>
        </div>
        <div className="sidebar">
          <div className="sidebar-logo">
            <span>Sc</span>
            <div className="Ofolder">
              <img src={LogoIcon} alt="LogoIcon"/>
              <span></span>
            </div>
            <span>pe</span>
          </div>
          <div className="sidebar-wrapper">
            <div className="sidebar-menu">
              <ul>
                <li><NavLink to="/" onClick={this.handleClick}><span>Home</span><img src={HomeIcon} alt=""/></NavLink></li>
                <li><NavLink to="#"><span>My Page</span><img src={MyPageIcon} alt=""/></NavLink></li>
                <li><NavLink to="/aboutUs" onClick={this.handleClick}><span>About us</span><img src={AboutUs} alt=""/></NavLink></li>
                <li><NavLink to="/addLinks" onClick={this.handleClick}><span>Add Links</span><img src={Add} alt=""/></NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}