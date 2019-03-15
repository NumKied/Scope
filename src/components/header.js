import React, { Component } from 'react';
import LogoIcon from '../img/LogoIcon.svg';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultScrollY: 0,
      user: 'NumKied',
      headerPart: ''
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleClick() {
    var sidebar = document.getElementsByClassName('sidebar');
    // var burgerButton = document.getElementsByClassName("sidebar-open");
    var header = document.getElementsByTagName('header');
    var closeSidebar = document.getElementsByClassName('sidebar-close');
    closeSidebar[0].classList.toggle('activeSidebar-close');
    header[0].classList.toggle('hideHeader');
    // burgerButton[0].classList.toggle('activeBurgerButton');
    sidebar[0].classList.toggle('sidebar-active');
  }

  handleScroll() {
    var currentScrollY = window.pageYOffset;
    var prevScrollY = this.state.defaultScrollY;
    var header = document.getElementsByTagName('header');
    var sidebar = document.getElementsByClassName('sidebar');
    var closeSidebar = document.getElementsByClassName('sidebar-close');
    if (currentScrollY > prevScrollY) {
      header[0].classList.add('hideHeader');
      sidebar[0].classList.remove('sidebar-active');
      closeSidebar[0].classList.remove('activeSidebar-close');
      this.setState({
        defaultScrollY: currentScrollY
      });
    } else {
      header[0].classList.remove('hideHeader');
      sidebar[0].classList.remove('sidebar-active');
      closeSidebar[0].classList.remove('activeSidebar-close');
      this.setState({
        defaultScrollY: currentScrollY
      });
    }
  }

  componentWillMount() {
    const loggedUser = (
      <div onClick={this.handleClick} className="sidebar-open">
        <span></span>
      </div>
    );

    const guestUser = (
      <div className="header-menu">
        <ul>
          <li>SignIn</li>
          <li>SignUp</li>
        </ul>
      </div>
    );

    if (this.state.user === 'guest') {
      this.setState({
        headerPart: guestUser
      });
    } else {
      this.setState({
        headerPart: loggedUser
      });
    }
  }

  render() {
    return (
        <header>
          <div className="header-wrapper">
            <div className="logo">
              <span>Sc</span>
              <div className="Ofolder">
                <img src={LogoIcon} alt="LogoIcon"/>
                <span></span>
              </div>
              <span>pe</span>
            </div>
            {this.state.headerPart}
          </div>
        </header>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}