import React, { Component } from 'react';
import { Tab } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import './TagMessageList.scss';
const dataSource = [
{ title: '股票成交概况', date: '2018/01/06' },
{ title: '港股通成交信息', date: '2018/05/16' },
{ title: '债券成交概况', date: '2018/08/06' },
{ title: '中证系列指数', date: '2018/10/06' },
{ title: '上证系列指数', date: '2018/11/06' },
];


export default class TagMessageList extends Component {
static displayName = 'TagMessageList';

constructor(props) {
super(props);
this.state = {};
}

renderItem = (item, idx) => {
return (
<div style={styles.item} key={idx}>
< a href=" " style={styles.title}>
{item.title}
</ a>
<div style={styles.date}>{item.date}</div>
</div>
);
};

render() {
return (
<div className="tag-message-list">
<IceContainer>
<Tab size="small">
<Tab.TabPane key={0} tab="我的消息">
{dataSource.map(this.renderItem)}
<div style={styles.allMessage}>
< a href="##">查看全部消息</ a>
</div>
</Tab.TabPane>
<Tab.TabPane key={1} tab="未处理">
<p>暂无数据</p >
</Tab.TabPane>
</Tab>
</IceContainer>
</div>
);
}
}
const styles = {
  allMessage: {
  marginTop: '20px',
  textAlign: 'center',
  },
  item: {
  borderBottom: '1px solid #F4F4F4',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '15px 0',
  },
  title: {
  fontSize: '14px',
  color: '#666',
  },
  date: {
  fontSize: '12px',
  color: '#666',
  },
  };
  