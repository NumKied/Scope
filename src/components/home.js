import React, { Component } from 'react';
import Posts from '../date.json';
import ReadTime from '../img/open-book.svg';
import View from '../img/view.svg';


export class Home extends Component {
  likeClickHandler(e) {
    if (e.target.classList.contains('likeAnimation-empty')) {
      e.target.classList.remove('likeAnimation-empty');
      e.target.classList.add('likeAnimation-full');
      e.target.nextSibling.innerHTML--;
    } else {
      e.target.classList.remove('likeAnimation-full');
      e.target.classList.add("likeAnimation-empty");
      e.target.nextSibling.innerHTML++;
    }
  }

  render() {
    return (
      <section className="home">
        <div className="wrapper">
          <div className="posts">
            {Posts.map((post) => {
              let style = {
                background: 'url(' + post.background + ') no-repeat center/cover'
              };
              return (
              <div className="post" key={post.id}>

                <div className="postHeader">
                    <div className="postHeader-left">
                      <div className="avatar">
                        <img src={post.avatar} alt="avatar"/>
                      </div>
                      <div className="postInfo">
                        <p>{post.author}</p>
                        <p>{post.postDate}</p>
                      </div>
                    </div>
                    <div className="postHeader-right">
                      <div className="readTime">
                        <img src={ReadTime} alt="readTime"/>
                        <span>{post.timeReading}</span>
                      </div>
                    </div>
                </div>
  
                <div className="postContent" style={style}>
                  {/* <img src={Forest} alt="" /> */}
                  <div className="postHoverContent">
                    <h1>{post.title}</h1>
                    <span>read...</span>
                  </div>
                </div>
  
                <div className="postFooter">
                    <div className="postFooter-left">
                      <span>Comments</span>
                    </div>
                    <div className="postFooter-right">
                      <div className="postLikes">
                        <span className="like" onClick={this.likeClickHandler}></span>
                        <span className="likesCounter">{post.likesCounter}</span>
                      </div>
                      <div className="postViews">
                        <img src={View} alt="view"/>
                        <span className="viewsCounter">{post.viewsCounter}</span>
                      </div>
                    </div>
                </div>
  
              </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}