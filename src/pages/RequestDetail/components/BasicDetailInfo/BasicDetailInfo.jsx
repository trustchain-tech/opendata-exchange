import React, { Component } from 'react';
import axios from 'axios';
import IceContainer from '@icedesign/container';
import { Grid, Button } from '@icedesign/base';

const { Row, Col } = Grid;

/**
 * 渲染详情信息的数据
 */
 const dataSource = {
   title: '阿萨姆奶茶',
   customerName: '张三',
   address: '杭州市文一西路',
   account: '200.00',
   requestTime: '2017-10-18 12:20:07',
   phone: '15612111213',
   status: '待处理',
   operation:'读操作',
   remark: '暂无',
   pics: [
     'https://img.alicdn.com/imgextra/i3/672246894/TB2ziLDdbsTMeJjSszdXXcEupXa_!!672246894-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
     'https://img.alicdn.com/imgextra/i1/2645911918/TB2qQA9fk.HL1JjSZFuXXX8dXXa_!!2645911918-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
     'https://img.alicdn.com/bao/uploaded/TB2obaBXeLyQeBjy1XaXXcexFXa_!!0-dgshop.jpg_180x180xzq90.jpg_.webp',
     'https://img.alicdn.com/tps/i1/99136475/TB2Cc7saE1HTKJjSZFmXXXeYFXa_!!0-juitemmedia.jpg_180x180q90.jpg_.webp',
   ],
 };

export default class BasicDetailInfo extends Component {
  static displayName = 'BasicDetailInfo';

  static displayName1 = 'SuccessDialog';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    console.log(this.state.data);
  }
 

  componentWillMount() {
      axios
        .get('/mock/basic-detail-info.json')
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

  affirmtgrant = () => {
    if (confirm("您确定进行授权？")) {
      alert("授权成功！");
    }
  }

  refusegrant = () => {
    if (confirm("您确定拒绝授权？")) {
      alert("拒绝授权成功！");
    }
  }

  render() {
    const dataSource = this.state.data;
    console.log(dataSource.title);

    return (
      <IceContainer>
        <h2 style={styles.basicDetailTitle}>详情</h2>

        <div style={styles.infoColumn}>
          <h5 style={styles.infoColumnTitle}>基本信息</h5>
          <Row wrap style={styles.infoItems}>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>商品名称：</span>
              <span style={styles.infoItemValue}>{ this.state.data.title}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>买家名称：</span>
              <span style={styles.infoItemValue}>{ this.state.data.customerName}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>买家地址：</span>
              <span style={styles.infoItemValue}>{ this.state.data.address}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>金额：</span>
              <span style={styles.infoItemValue}>¥ { this.state.data.account}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>请求时间：</span>
              <span style={styles.infoItemValue}>{ this.state.data.requestTime}</span>
            </Col>
          </Row>
        </div>
        <div style={styles.infoColumn}>
          <h5 style={styles.infoColumnTitle}>更多信息</h5>
          <Row wrap style={styles.infoItems}>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>联系方式：</span>
              <span style={styles.infoItemValue}>{ this.state.data.phone}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>请求内容：</span>
              <span style={styles.infoItemValue}>{ this.state.data.operation}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>订单状态：</span>
              <span style={styles.infoItemValue}>{ this.state.data.status}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>备注：</span>
              <span style={styles.infoItemValue}>{ this.state.data.remark}</span>
            </Col>
            {/* <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.attachLabel}>附件：</span>
              <span>
                {dataSource.pics &&
                  dataSource.pics.length &&
                  dataSource.pics.map((pic, index) => {
                    return (
                      <img
                        key={index}
                        src={pic}
                        style={styles.attachPics}
                        alt="图片"
                      />
                    );
                  })}
              </span>
            </Col> */}
          </Row>    
        </div>
        <div style={styles.infoColumn}>
        <h2 style={styles.basicDetailTitle}>操作</h2>
          <Button
             style={styles.secondaryButton}
             type="normal" 
             component="a"
             href="#"
             onClick={this.affirmtgrant}>
             确认授权</Button>
          <Button
             style={styles.primaryButton}
             type="primary"
             component="a"
             onClick = {this.refusegrant}
             href="#">拒绝授权</Button>
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
  },
  attachPics: {
    width: '80px',
    height: '80px',
    border: '1px solid #eee',
    marginRight: '10px',
  },
  buttons: { textAlign: 'center', marginTop: 33 },
  primaryButton: {
    height: 40,
    fontSize: 12,
    padding: '0 58px',
    lineHeight: '40px',
    backgroundColor: '#5485f7',
    color: '#ffffff',
  },
  secondaryButton: {
    height: 40,
    fontSize: 12,
    padding: '0 58px',
    lineHeight: '40px',
    marginRight: 15,
    backgroundColor: 'transparent',
    borderColor: '#5485f7',
    color: '#5485f7',
  },
};
