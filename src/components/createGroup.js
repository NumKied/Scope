import React, { Component } from 'react';

export class CreateGroup extends Component {
  render() {
    // let group = document.createElement('div');
    // let groupName = document.createElement('div');
    // groupName.setAttribute('class', 'groupName');
    // group.setAttribute('class', 'group');
    // group.style.backgroundColor = color;
    // groupName.innerHTML = enteredGroupName;
    // group.appendChild(groupName); 
    // parent[0].appendChild(group);
    let style = {
      backgroundColor: this.props.color
    };
    return (
      <div className="group" style={style}>
        <div className="groupName">
          {this.props.text}
        </div>
      </div>
    );
  }
}