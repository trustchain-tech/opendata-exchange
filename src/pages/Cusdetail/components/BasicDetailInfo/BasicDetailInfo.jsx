import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@icedesign/base';
import axios from 'axios';

const { Row, Col } = Grid;


export default class BasicDetailInfo extends Component {
  static displayName = 'BasicDetailInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    let result;
    if (window.location.hash.indexOf("?")!=-1) {
      result = window.location.hash.substr(window.location.hash.indexOf("=")).split("=")[1];
   }
    this.state = {
      data: {},
      result : result
    };
    console.log(this.state.data);
  }

  componentWillMount() {
    
    let url = '';
    switch(this.state.result){
      case '0' : url= '/mock/cusdetail.json'; break;
      case '1': url= '/mock/cusdetail1.json'; break;
      case '2': url= '/mock/cusdetail2.json'; break;
      case '3': url= '/mock/cusdetail3.json'; break;
      default : break;
    }
    axios
        .get(url)
        .then((response) => {
          console.log(response.data.data);
          this.setState({
            data:response.data.data,
          });
        })
        .catch((error) =>{
          console.log(error);
        });
        console.log(this.state.data);
   }

  render() {
    return (
      <IceContainer>
        <h2 style={styles.basicDetailTitle}>订单详情</h2>

        <div style={styles.infoColumn}>
          <h5 style={styles.infoColumnTitle}>基本信息</h5>
          <Row wrap style={styles.infoItems}>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>商品名称：</span>
              <span style={styles.infoItemValue}>{this.state.data.title}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>卖家名称：</span>
              <span style={styles.infoItemValue}>{this.state.data.sellerName}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>买家名称：</span>
              <span style={styles.infoItemValue}>{this.state.data.customer}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>金额：</span>
              <span style={styles.infoItemValue}>¥ {this.state.data.amount}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>完成时间：</span>
              <span style={styles.infoItemValue}>{this.state.data.time}</span>
            </Col>
          </Row>
        </div>
        <div style={styles.infoColumn}>
          <h5 style={styles.infoColumnTitle}>更多信息</h5>
          <Row wrap style={styles.infoItems}>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>买家地址：</span>
              <span style={styles.infoItemValue}>{this.state.data.address}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>请求操作：</span>
              <span style={styles.infoItemValue}>{this.state.data.operation}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>任务状态：</span>
              <span style={styles.infoItemValue}>{this.state.data.status}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>备注：</span>
              <span style={styles.infoItemValue}>{this.state.data.remark}</span>
            </Col>
          </Row>
        </div>
      </IceContainer>
    );
  }
}

const styles = {
  basicDetailTitle: {
    margin: '10px 0',
    fontSize: '16px',
  },
  infoColumn: {
    marginLeft: '16px',
  },
  infoColumnTitle: {
    margin: '20px 0',
    paddingLeft: '10px',
    borderLeft: '3px solid #3080fe',
  },
  infoItems: {
    padding: 0,
    marginLeft: '25px',
  },
  infoItem: {
    marginBottom: '18px',
    listStyle: 'none',
    fontSize: '14px',
  },
  infoItemLabel: {
    minWidth: '70px',
    color: '#999',
  },
  infoItemValue: {
    color: '#333',
  },
  attachLabel: {
    minWidth: '70px',
    color: '#999',
    float: 'left',
  }
};
