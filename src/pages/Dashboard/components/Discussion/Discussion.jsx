import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import LineChart from '../LineChart';

const data = [
  {
    date: '2018年1月',
    acc: 15,
  },
  {
    date: '2018年2月',
    acc: 20,
  },
  {
    date: '2018年3月',
    acc: 17,
  },
  {
    date: '2018年4月',
    acc: 20,
  },
  {
    date: '2018年5月',
    acc: 21,
  },
  {
    date: '2018年6月',
    acc: 20,
  },
  {
    date: '2018年7月',
    acc: 21,
  },
  {
    date: '2018年8月',
    acc: 28,
  },
  {
    date: '2018年9月',
    acc: 16,
  },
  {
    date: '2018年10月',
    acc: 23,
  },
  {
    date: '2018年11月',
    acc: 11,
  }
];

const cols = {
  acc: {
    alias: '销量',
  },
};

export default class Commits extends Component {
  static displaydate = 'Commits';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <IceContainer title="2018年各月销量">
          <LineChart cols={cols} data={data} axisdate="date" />
        </IceContainer>
      </div>
    );
  }
}
