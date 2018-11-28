import React, { Component } from 'react';
import EntryCard from './components/EntryCard';
import OrderList from './components/OrderList';

export default class Seller extends Component {
  static displayName = 'Seller';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="seller-page">
        <EntryCard />
        <OrderList />
      </div>
    );
  }
}
