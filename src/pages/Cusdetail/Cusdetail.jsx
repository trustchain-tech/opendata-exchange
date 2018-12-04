import React, { Component } from 'react';
import BasicDetailInfo from './components/BasicDetailInfo';

export default class Cusdetail extends Component {
  static displayName = 'Cusdetail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cusdetail-page">
        <BasicDetailInfo />
      </div>
    );
  }
}
