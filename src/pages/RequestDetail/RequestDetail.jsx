import React, { Component } from 'react';
import BasicDetailInfo from './components/BasicDetailInfo';

export default class RequestDetail extends Component {
  static displayName = 'RequestDetail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="request-detail-page">
        <BasicDetailInfo />
      </div>
    );
  }
}
