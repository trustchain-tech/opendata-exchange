import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

const data = [
  {
    name: '2018.12.03',
    value: 38,
  },
  {
    name: '2018.12.04',
    value: 0,
  },
  {
    name: '2018.12.05',
    value: 61,
  },
  {
    name: '2018.12.06',
    value: 10,
  },
  {
    name: '2018.12.07',
    value: 39,
  },
  {
    name: '2018.12.08',
    value: 23,
  },
  {
    name: '2018.12.09',
    value: 36,
  },
];

const cols = {
  value: {
    tickInterval: 20,
  },
};

export default class BarChart extends Component {
  static displayName = 'BarChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer title="本周销量">
        <Chart height={400} padding={[40]} data={data} scale={cols} forceFit>
          <Axis name="name" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom type="interval" position="name*value" />
        </Chart>
      </IceContainer>
    );
  }
}
