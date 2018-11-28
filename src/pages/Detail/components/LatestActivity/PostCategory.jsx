import React, { Component } from 'react';
import axios from "axios"

import { Tab, Button } from '@icedesign/base';

export default class PostCategory extends Component {
  static displayName = 'PostCategory';

  constructor(props) {
    super(props);
    let result;
    if (window.location.hash.indexOf("?")!=-1) {
      result = window.location.hash.substr(window.location.hash.indexOf("=")).split("=")[1];
   }
    this.state = {
      data:[],
      result : result
    };
  }

  applygrant = () => {
    if (confirm("您确定申请授权？")) {
      alert("申请成功！请您耐心等待卖家授权！");
    }
  }

  componentWillMount() {
    console.log(typeof this.state.result)
    let url = '';
    switch(this.state.result){
      case '0' : url= '/mock/detail.json'; break;
      case '1': url= '/mock/detail1.json'; break;
      default : break;
    }
    console.log(url)
    axios
      .get(url)
      .then((response) => {
        this.setState({
          data: response.data.data === undefined ? ([]) : response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  render() {
    const tabs = [
      {
        tab: '详细信息',
        icon: require('./images/post.png'),
        key: 'home',
        content: [  
          {
            title: '数据信息',
            cover: require('./images/lock.jpg'),
            data :this.state.data}]
      },
    ];
   

    return (
      <div>
        <Tab
          navStyle={{ backgroundColor: '#fff' }}
          contentStyle={{ backgroundColor: '#fff', marginTop: 20 }}
        >
          {tabs.map((item) => (
            <Tab.TabPane
              tabStyle={{ height: 60, padding: '0 15px' }}
              key={item.key}
              tab={
                <div style={styles.navItemWraper}>
                  <img
                    alt={item.tab}
                    src={item.icon}
                    style={{ width: 30, marginRight: 8 }}
                  />
                  {item.tab}
                </div>
              }
            >
              <div style={styles.postCategoryList}>
                {item.content.map((item) => {
                  return (
                    <div style={styles.postCategoryItem}>
                      <div style={styles.coverWrapper}>
                        <img
                          alt={item.title}
                          style={{ width: 300, display: 'block' }}
                          src={item.cover}
                        />
                      </div>
                      <div style={styles.blockDetail}>
                        <h3 style={styles.blockTitle}>{item.title}</h3>

                        {
                          item.data === undefined ? (''):(
                          item.data.map((desc) => {
                          return (
                            <div style={styles.blockItem}>
                              <label style={styles.blockLable}>
                                {desc.label}
                              </label>
                              <div
                                style={styles.blockDesc}
                                dangerouslySetInnerHTML={{ __html: desc.desc }}
                              />
                            </div>
                          );
                        }))}
                        <Button
                          style={styles.blockBtn}
                          type="primary"
                          component="a"
                          href={item.url}
                          onClick = {this.applygrant}
                        >
                          申请授权
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Tab.TabPane>
          ))}
        </Tab>
      </div>
    );
  }
}

const styles = {
  titleWrapper: {
    backgroundColor: '#fff',
    height: 54,
    lineHeight: '54px',
    padding: '0 16px',
  },
  navItemWraper: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    lineHeight: '60px',
  },
  postCategoryList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postCategoryItem: {
    width: '100%',
    flex: '0 0 100%',
    boxSizing: 'border-box',
    backgroundColor: '#f6f6f6',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  coverWrapper: {
    paddingRight: 14,
  },
  blockDetail: {
    position: 'relative',
  },
  blockTitle: {
    position: 'relative',
    left: '200px',
    fontSize: 20,
    padding: '6px 0',
  },
  blockItem: {
    display: 'flex',
  },
  blockLable: {
    
    flex: '0 0 120px',
    fontSize: 18,
    lineHeight: '35px',
  },
  blockDesc: {
    
    flex: '120 0 500px',
    fontSize: 18,
    color: '#999',
    lineHeight: '35px',
  },
  blockBtn: {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    borderRadius: '3px',
    background: '#6af',
    color: '#fff',
  },
};
