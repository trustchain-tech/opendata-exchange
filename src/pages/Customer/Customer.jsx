import React, { Component } from 'react';
import OrderList from './components/OrderList';
// import TagMessageList from './components/TagMessageList';

export default class Customer extends Component {
  static displayName = 'Customer';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="customer-page">
        {/* <TagMessageList /> */}
        <OrderList />
        
      </div>
    );
  }
}
