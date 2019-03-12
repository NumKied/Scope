import React, { Component } from 'react';
import Avatar from '../img/Avatar.jpg';
import ReadTime from '../img/open-book.svg';
import View from '../img/view.svg';
import Forest from '../img/forest.jpg';

export class Home extends Component {
  likeClickHandler() {
    
  }
  render() {
    return (
      <section className="home">
        <div className="wrapper">
          <div className="posts">
            <div className="post">

              <div className="postHeader">
                  <div className="postHeader-left">
                    <div className="avatar">
                      <img src={Avatar} alt="avatar"/>
                    </div>
                    <div className="postInfo">
                      <p>Nazarii Kravchuck Mykolayovych</p>
                      <p>March 10 - 18:00</p>
                    </div>
                  </div>
                  <div className="postHeader-right">
                    <div className="readTime">
                      <img src={ReadTime} alt="readTime"/>
                      <span>10min</span>
                    </div>
                  </div>
              </div>

              <div className="postContent">
                <img src={Forest} alt=""/>
              </div>

              <div className="postFooter">
                  <div className="postFooter-left">
                    <span>Comments</span>
                  </div>
                  <div className="postFooter-right">
                    <div className="postLikes">
                      <span className="like" onClick={this.likeClickHandler}></span>
                      <span>10</span>
                    </div>
                    <div className="postViews">
                      <img src={View} alt="view"/>
                      <span>143</span>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}