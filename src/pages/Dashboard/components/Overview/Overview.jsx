import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@icedesign/base';
import ContainerTitle from '../../../../components/ContainerTitle';

const { Row, Col } = Grid;

const mockData = [
  {
    title: '总商品数(个)',
    value: '999',
  },
  {
    title: '在售商品数(个)',
    value: '865',
  },
  {
    title: '总销量(个)',
    value: '1996',
  },
  {
    title: '卖家数(人)',
    value: '650',
  },
];

export default class Overview extends Component {
  static displayName = 'Overview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ContainerTitle title="概览" />
        <IceContainer style={styles.container}>
          <Row>
            <Col l="4">
              <div style={styles.item}>
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/heTdoQXAHjxNGiLSUkYA.svg"
                  alt=""
                />
              </div>
            </Col>
            {mockData.map((item, index) => {
              return (
                <Col l="4" key={index}>
                  <div style={styles.item}>
                    <p style={styles.itemTitle}>{item.title}</p>
                    <p style={styles.itemValue}>{item.value}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  item: {
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    color: '#697b8c',
    fontSize: '14px',
  },
  itemValue: {
    color: '#314659',
    fontSize: '36px',
    marginTop: '10px',
  },
};
