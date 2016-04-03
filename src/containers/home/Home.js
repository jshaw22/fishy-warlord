import React, { Component } from 'react';

import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">BingoSmashers, a childfree community</h1>
            <p className="lead">
             Welcome to BingoSmashers a bingo-free community. 
            </p>
          </div>
        </div>

        <div className="container">
        Something will go here. A newsfeed maybe?
        </div>
      </div>
    );
  }
}
