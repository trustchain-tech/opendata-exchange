import React, { Component } from 'react';
import LatestActivity from './components/LatestActivity';
//import PostCategory from './components/PostCategory/PostCategory';

export default class Detail extends Component {
  static displayName = 'Detail';
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="detail-page">
        <LatestActivity />
      </div>
    );
  }
}
