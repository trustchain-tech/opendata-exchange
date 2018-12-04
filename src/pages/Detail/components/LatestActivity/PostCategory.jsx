import React, { Component } from 'react';
import axios from "axios"
import Coin from "../../../../../build/contracts/Coin.json";
import Web3 from "web3";
import TruffleContract from "truffle-contract";

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
      result : result,
      web3Provider : null,
      contracts : {},
      url : '',
      req : {}
    };
  }

  componentWillMount = async () => {
    let url = '';
    switch(this.state.result){
      case '0' : url= '/mock/detail.json'; break;
      case '1': url= '/mock/detail1.json'; break;
      case '2': url= '/mock/detail2.json'; break;
      case '3': url= '/mock/detail3.json'; break;
      case '4': url= '/mock/detail4.json'; break;
      case '5': url= '/mock/detail5.json'; break;
      case '6': url= '/mock/detail6.json'; break;
      case '7': url= '/mock/detail7.json'; break;
      case '8': url= '/mock/detail8.json'; break;
      case '9': url= '/mock/detail9.json'; break;
      case '10': url= '/mock/detail10.json'; break;
      case '11': url= '/mock/detail11.json'; break;
      default : break;
    }
    let result = await axios.get(url)
     this.setState({
       data : result.data.data
     })  
    if(typeof web3 !== 'undefined'){
      this.setState({
        web3Provider : web3.currentProvider
      })
      web3 = new Web3(web3.currentProvider);
      
    }else{
      web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    }
    this.setState({
      web3Provider : web3.currentProvider,
      web3 : web3
    })
    this.initContract();
  }

  initContract = () => {
    //let Purchase = TruffleContract(Coin);
    this.setState({Purchase : TruffleContract(Coin)})
    this.state.Purchase.setProvider(this.state.web3Provider);
  }


  grant = () => {
    //var purchaseInstance;
    let athis = this;
    this.state.web3.eth.getAccounts(function(err,accounts){
      if(err){
        console.log(err)
      }else{

        athis.state.Purchase.deployed().then(function(instance){
          console.log(athis.state.data)
          let purchaseInstance = instance;
            let str = '0x18bA6f84FDCb2B26892493aEC5885C8315584c47'
          return purchaseInstance.transfer(str,10*1e2, {from : accounts[0]});
        }).then(function(result) {
          let value = {};
          value.txHash = result.tx;
          value.blockNumber = result.receipt.blockNumber;
          athis.state.Purchase.deployed().then(function(ins){
            return ins.getMessage.call();
          }).then(function(res){
            value.userId = res;
            console.log(value)
            alert("申请成功")
          })
        }) 
      }
    })
  }

  buy = () => {
    //var purchaseInstance;
    let athis = this;
    this.state.web3.eth.getAccounts(function(err,accounts){
      if(err){
        console.log(err)
      }else{

        athis.state.Purchase.deployed().then(function(instance){
         // console.log(123,instance)
          let purchaseInstance = instance;
            let str = '0x18bA6f84FDCb2B26892493aEC5885C8315584c47'
            let price = JSON.parse(athis.state.data[2].desc)*100;
          return purchaseInstance.transfer(str,price, {from : accounts[0]});
        }).then(function(result) {
          let value = {};
          value.txHash = result.tx;
          value.blockNumber = result.receipt.blockNumber;
          athis.state.Purchase.deployed().then(function(ins){
            return ins.getMessage.call();
          }).then(function(res){
            value.userId = res;
            console.log(value)
            alert("购买成功")
          })
        }) 
      }
    })
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
            data :this.state.data
          }
          ]
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
                          onClick= {() => {this.grant()}}
                        >
                          申请授权
                        </Button>
                        <Button
                          style={styles.buyBtn}
                          type="normal"
                          component="a"
                          href={item.url}
                          onClick= {() => {this.buy()}}
                        >
                          购买
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
    height: 40,
    fontSize: 16,
    padding: '0 58px',
    bottom: '-100px',
    lineHeight: '40px',
    backgroundColor: '#5485f7',
    color: '#ffffff',
  },
  buyBtn: {
    height: 40,
    fontSize: 16,
    padding: '0 58px',
    lineHeight: '40px',
    bottom: '-100px',
    right: '-50px',
    marginRight: 15,
    backgroundColor: 'transparent',
    borderColor: '#5485f7',
    color: '#5485f7',
  },
};
