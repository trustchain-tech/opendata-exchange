import React, { Component } from 'react';
import { Grid, Icon } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import axios from "axios";
import Detail from "../../../Detail/";

const { Row, Col } = Grid;

export default class ServiceCard extends Component {
  static displayName = 'ServiceCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  componentDidMount() {
    axios
      .get('/mock/services.json')
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          data: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  a=(index)=>{
    window.location.href = '/#/detail?id=' + index
  }
  render() {
    const mockData = this.state.data;
    return (
      <Row wrap gutter="20">
        {mockData.map((item, index) => {
          return (
            <Col l="8" key={index}>
              <IceContainer style={styles.container}>
                <div style={styles.body}>
                  <h5 style={styles.name}>{item.name}</h5>
                  <p style={styles.desc}>{item.desc}</p>
                  <div style={styles.tag}>{item.tag}</div>
                </div>
                <div style={styles.footer}>
                  {/* <a href="#/detail" style={{ ...styles.link, ...styles.line }}>
                    <Icon type="office" size="small" style={styles.icon} />{' '}
                    文档帮助
                  </a> */}
                  <a onClick={()=>{
                    this.a(index)
                  }} style={styles.link}>
                    <Icon type="box" size="small" style={styles.icon} />
                    详细信息
                  </a>
                </div>
              </IceContainer>
            </Col>
          );
        })}
      </Row>
    );
  }
}

const styles = {
  container: {
    padding: '0',
  },
  body: {
    padding: '20px',
    height: '120px',
    position: 'relative',
    borderBottom: '1px solid #f0f0f0',
  },
  name: {
    margin: '0',
    padding: '0',
    height: '28px',
    lineHeight: '28px',
    fontSize: '16px',
    color: '#0d1a26',
  },
  desc: {
    fontSize: '14px',
    color: '#697b8c',
    margin: '12px 0',
  },
  tag: {
    background: '#fff0f6',
    border: '1px solid #ffadd2',
    color: '#eb2f96',
    position: 'absolute',
    right: '20px',
    top: '20px',
    padding: '4px 12px',
    textAlign: 'center',
    borderRadius: '50px',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    height: '56px',
    lineHeight: '56px',
    color: '#314659',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '50%',
    textAlign: 'center',
  },
  line: {
    borderRight: '1px solid #f0f0f0',
  },
  icon: {
    marginRight: '5px',
  },
};
