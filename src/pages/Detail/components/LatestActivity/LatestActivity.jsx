import React, { Component } from 'react';
import Card from './Card';
//import BarChart from './BarChart';
import PostCategory from './PostCategory';
import axios from 'axios';

export default class LatestActivity extends Component {
  static displayName = 'LatestActivity';

  static propTypes = {};

  static defaultProps = {};

  constructor(props){
    super(props);
    let result;
    if (window.location.hash.indexOf("?")!=-1) {
      result = window.location.hash.substr(window.location.hash.indexOf("=")).split("=")[1];
   }
    this.state={
      data:[],
      result : result
    };
  }

  componentWillMount() {
    console.log(typeof this.state.result)
    let url = '';
    switch(this.state.result){
      case '0' : url= '/mock/grant_list.json'; break;
      case '1': url= '/mock/grant_list1.json'; break;
      case '2': url= '/mock/grant_list2.json'; break;
      case '3': url= '/mock/grant_list3.json'; break;
      case '4': url= '/mock/grant_list4.json'; break;
      case '5': url= '/mock/grant_list5.json'; break;
      case '6': url= '/mock/grant_list6.json'; break;
      case '7': url= '/mock/grant_list7.json'; break;
      case '8': url= '/mock/grant_list8.json'; break;
      case '9': url= '/mock/grant_list9.json'; break;
      case '10': url= '/mock/grant_list10.json'; break;
      case '11': url= '/mock/grant_list11.json'; break;
      default : break;
    }
    console.log(url)
    axios
      .get(url)
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

  render() {
    const dataSource = this.state.data;
    const columns = [
      {
        title: '时间',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '购买者',
        dataIndex: 'num',
        key: 'num',
      },
    ];

    return (
      <Card
        //title="详细信息"
        subTitle="授权列表"
        // summary={[
        //   { label: '本周发布活动数', value: '123' },
        //   { label: '上周发布活动数', value: '349' },
        //   { label: '累计发布活动数', value: '23,239' },
        // ]}
        //link={{ text: '发布活动明细', href: '#' }}
        dataSource={dataSource}
        columns={columns}
        //content={<BarChart />}
        content = {<PostCategory />}
      />
    );
  }
}
