import React, { Component } from 'react';
import axios from 'axios';
import { Table } from '@icedesign/base';
import IceContainer from '@icedesign/container';

export default class OrderList extends Component {
  static displayName = 'OrderList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    this.getTableData();
  }

  /**
  * 异步获取数据
  */
  getTableData = () => {
    axios
      .get('/mock/order-list1.json')
      .then((response) => {
        this.setState({
          tableData: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
  * 渲染订单信息
  */
  renderOrderInfo = (product) => {
    return (
      <div className="order-info" style={styles.orderInfo}>
        {/* <img src={product[0].avatar} style={styles.orderImg} alt="头像" /> */}
        <div className="order-description" style={styles.orderDescription}>
          {product[0].description}
        </div>
      </div>
    );
  };

  /**
  * 渲染订单价格
  */
  renderOrderPrice = (price) => {
    return <b>{price}</b>;
  };

  /**
  * 渲染卖家名称
  */
  renderSellerName = (sellerName) => {
    return <b>{sellerName}</b>;
  };

  /**
    * 渲染买家名称
    */
  renderCustomer = (customer) => {
    return <b>{customer}</b>;
  };

  /**
  * 渲染完成时间
  */
 renderTime = (time) => {
  return <b>{time}</b>;
};
  /**
  * 渲染订单单号
  */
  renderOrderNumber = (record) => {
    return <div>{record.product[0].title}</div>;
  };

  /**
  * 设置每一行的样式名称
  */
  getRowClassName = (record) => {
    if (record.status === 0) {
      return 'highlight-row';
    }
  };

  /**
  * 渲染操作行
  */
  a(index) {
    window.location.href = '/#/Cusdetail?id=' + index
  }

  renderOperation = (item, index) => {
    //alert(index);
    return (
      <a onClick={() => { this.a(index) }} style={styles.orderDetailLink}>
        查看
    </a>
    );
  };


  /**
  * 选中当前行的回调
  */
  handleRowSelection = (selectedRowKeys, records) => {
    console.log('selectedRowKeys:', selectedRowKeys);
    console.log('records:', records);
  };

  render() {

    const rowSelection = {
      onChange: this.handleRowSelection,
      mode: 'single'
    };
    console.log();

    const { tableData } = this.state;

    return (
      <div className="order-list" style={styles.orderList}>
        <IceContainer title="全部订单">
          <Table
            dataSource={tableData}
            getRowClassName={this.getRowClassName}
            rowSelection={rowSelection}
            hasBorder={false}
          >
            <Table.GroupHeader cell={this.renderOrderNumber} />
            <Table.Column
              cell={this.renderOrderInfo}
              title="商品"
              dataIndex="product"
              width={400}
            />
            <Table.Column
              cell={this.renderSellerName}
              title="卖家名称"
              dataIndex="sellerName"
              width={200}
            />
            <Table.Column
              cell={this.renderCustomer}
              title="买家名称"
              dataIndex="customer"
              width={120}
            />
            <Table.Column
              cell={this.renderOrderPrice}
              title="价格"
              dataIndex="price"
              width={120}
            />
            <Table.Column
              cell={this.renderTime}
              title="完成时间"
              dataIndex="time"
              width={120}
            />
            <Table.Column
              cell={this.renderOperation}
              title="详情"
              width={100}
            />
          </Table>
        </IceContainer>
      </div>
    );
  }
}


const styles = {
  orderImg: {
    width: '60px',
    height: '60px',
    float: 'left',
    marginRight: '10px',
  },
  orderDetailLink: {
    textDecoration: 'none',
  },
};

