import React, { Component } from 'react';
import IceContainer from '@icedesign/container';

const list = [
  {
    title: '全部订单',
    img: '//gw.alicdn.com/tfscom/TB1OyT.RVXXXXcpXXXXXXXXXXXX.png',
    url: '//www.taobao.com',
  },
  {
    title: '全部商品',
    img: '//img.alicdn.com/tfs/TB1g6cGRFXXXXa9XXXXXXXXXXXX-140-140.png',
    url: '//www.taobao.com',
  },
  {
    title: '商品上新',
    img: '//img.alicdn.com/tfs/TB196v1RFXXXXb6aXXXXXXXXXXX-140-140.png',
    url: '//www.taobao.com',
  },
  {
    title: '商品下架',
    img: '//img.alicdn.com/tfs/TB196v1RFXXXXb6aXXXXXXXXXXX-140-140.png',
    url: '//www.taobao.com',
  },
];

export default class EntryCard extends Component {
  static displayName = 'EntryCard';

  render() {
    return (
      <IceContainer
        className="entry-card"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {list.map((item, index) => {
          return (
            <div key={index} style={styles.item}>
              <a href={item.url} style={styles.link} target="_blank">
                <img src={item.img} style={styles.cover} alt={item.title} />
                <div style={styles.title}>{item.title}</div>
              </a>
            </div>
          );
        })}
      </IceContainer>
    );
  }
}

const styles = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70px',
    margin: '10px 40px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  cover: {
    width: '70px',
    height: '70px',
  },
  title: {
    marginTop: '12px',
    fontSize: '14px',
    textAlign: 'center',
  },
};
