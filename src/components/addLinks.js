import React, { Component } from 'react';
// import {CreateGroup} from './createGroup';
import Add from '../img/add.svg';
import Checked from '../img/checked.svg';

export class AddLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorChecked: false,
      target: '',
      goodTarget: true,
      createGroup: false,
      color: '',
      text: ''
    };
    this.addNewGroup = this.addNewGroup.bind(this);
    this.colorChoose = this.colorChoose.bind(this);
  }

  onClickGroup() {
    let opennedGroup = document.getElementsByClassName('openedGroup');
    let addLinks = document.getElementsByClassName('addLinks');
    let newGroup = document.getElementsByClassName('newGroup');
    opennedGroup[0].classList.toggle('openedGroup-active');
    addLinks[0].classList.toggle('addLinks-noneActive');
    newGroup[0].classList.toggle('newGroup-noneActive');
  }

  addNewGroup(e) {
    if (e.keyCode === 13 || e.target.classList.contains('addNameBtn')) {
      let targetValue = document.getElementsByClassName('nameEnter')[0].value;
      if (targetValue && this.state.colorChecked) {
        let dropdown = document.getElementsByClassName("newGroup-dropdown");
        let checkedColor = document.getElementsByClassName('checkedColor');
        let color = window.getComputedStyle(checkedColor[0].parentNode, null).getPropertyValue('background-color');
        this.setState({
          color: color
        });
        let enteredGroupName = targetValue;
        this.setState({
          text: enteredGroupName
        });
        let parent = document.getElementsByClassName('groups');

        let group = document.createElement('div');
        let groupName = document.createElement('div');
        groupName.setAttribute('class', 'groupName');
        group.setAttribute('class', 'group');
        group.style.backgroundColor = color;
        groupName.innerHTML = enteredGroupName;
        group.appendChild(groupName);
        parent[0].appendChild(group);
        this.setState({
          createGroup: true
        });

        let name = document.getElementsByClassName('nameEnter');
        name[0].value = '';
        let colors = ['checkRed', 'checkGreen', 'checkBlue', 'checkYellow'];
        for (let i = 0; i < colors.length; i++) {
          let color = document.getElementsByClassName(colors[i]);
          if (color[0].classList.contains('checkedColor')) {
            color[0].classList.remove('checkedColor');
            color[0].classList.add('unCheckedColor');
          }
        }
        dropdown[0].classList.toggle("newGroup-dropdown-active");
        this.setState({
          colorChecked: false
        });
      }
    }
  }

  colorChoose(e) {
    let goodTarget = false;
    let node = "child";
    let goodTargets = ['checkRed', 'checkGreen', 'checkBlue', 'checkYellow'];
    let parentTargets = ['redContent', 'greenContent', 'yellowContent', 'blueContent'];
    for (let i = 0; i < goodTargets.length; i++) {
      if (e.target.classList.contains(goodTargets[i])) {
        goodTarget = true;
      }
      if (e.target.classList.contains(parentTargets[i])) {
        goodTarget = true;
        node = "parent";
      }
    }
    if (goodTarget) {
      let colors = ['checkRed', 'checkGreen', 'checkBlue', 'checkYellow'];
      for (let i = 0; i < colors.length; i++) {
        if (e.target.classList[0] === colors[i]) {
          colors.splice(i, 1);
        }
        if (node === "parent") {
          if (e.target.childNodes[0].classList[0] === colors[i]) {
            colors.splice(i, 1);
          }
        }
      }
      for (let i = 0; i < colors.length; i++) {
        let color = document.getElementsByClassName(colors[i]);
        if (color[0].classList.contains('checkedColor')) {
          color[0].classList.remove('checkedColor');
          color[0].classList.add('unCheckedColor');
        }
      }
      if (node === "parent") {
        if (e.target.childNodes[0].classList.contains('unCheckedColor')) {
          e.target.childNodes[0].classList.remove('unCheckedColor');
          e.target.childNodes[0].classList.add('checkedColor');
          node = "child";
          this.setState({
            colorChecked: true
          });
        } else if (e.target.childNodes[0].classList.contains('checkedColor')) {
          e.target.childNodes[0].classList.remove('checkedColor');
          e.target.childNodes[0].classList.add('unCheckedColor');
          node = "child";
          this.setState({
            colorChecked: false
          });
        }
      }
      if (e.target.classList.contains('unCheckedColor')) {
        e.target.classList.remove('unCheckedColor');
        e.target.classList.add('checkedColor');
        this.setState({
          colorChecked: true
        });
      } else if (e.target.classList.contains('checkedColor')) {
        e.target.classList.remove('checkedColor');
        e.target.classList.add('unCheckedColor');
        this.setState({
          colorChecked: false
        });
      }
    }
  }

  handleClick() {
    let button = document.getElementsByClassName("addNewGroup");
    let dropdown = document.getElementsByClassName("newGroup-dropdown");
    let colors = ['checkRed', 'checkGreen', 'checkBlue', 'checkYellow'];
    for (let i = 0; i < colors.length; i++) {
      let color = document.getElementsByClassName(colors[i]);
      if (color[0].classList.contains('checkedColor')) {
        color[0].classList.remove('checkedColor');
        color[0].classList.add('unCheckedColor');
      }
    }
    dropdown[0].classList.toggle("newGroup-dropdown-active");
    if (button[0].classList.contains('addNewGroup-click')) {
      button[0].classList.remove('addNewGroup-click');
      button[0].classList.add('addNewGroup-click2');
    } else {
      button[0].classList.remove('addNewGroup-click2');
      button[0].classList.add("addNewGroup-click");
    }
    let name = document.getElementsByClassName('nameEnter');
    name[0].value = '';
  }

  render() {
    return (
      <section className="links">
        <div className="openedGroup">
          
        </div>
        <div className="addLinks">
          <div className="wrapper groups">
            {/* <button onClick={this.onClickGroup}></button> */}
            <div className="newGroup">
              <img src={Add} onClick={this.handleClick} className="addNewGroup" alt=""/>
              <div className="newGroup-dropdown">
                <div className="addName">
                  <input type="text" placeholder="Enter Name" onKeyDown={this.addNewGroup} className="nameEnter"/>
                  <button onClick={this.addNewGroup} className="addNameBtn">Add</button>
                </div>
                <span>Choose color</span>
                <div className="groupColor">
                  <div className="red" onClick={this.colorChoose}>
                    <div className="redContent">
                      <img src={Checked} alt="" className="checkRed unCheckedColor"/>
                    </div>
                  </div>
                  <div className="green" onClick={this.colorChoose}>
                    <div className="greenContent">
                      <img src={Checked} alt="" className="checkGreen unCheckedColor"/>
                    </div>
                  </div>
                  <div className="blue" onClick={this.colorChoose}>
                    <div className="blueContent">
                      <img src={Checked} alt="" className="checkBlue unCheckedColor"/>
                    </div>
                  </div>
                  <div className="yellow" onClick={this.colorChoose}>
                    <div className="yellowContent">
                      <img src={Checked} alt="" className="checkYellow unCheckedColor"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <CreateGroup color={this.state.color} text={this.state.text}/> */}
          </div>
        </div>
      </section>
    );
  }
}