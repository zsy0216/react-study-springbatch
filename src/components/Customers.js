import React,{Component} from 'react';
import { Table, Input, Button  } from 'antd';

import axios from 'axios';

const { Search } = Input;

const columns = [
    {
      title: '客户姓名',
      dataIndex: 'surname',
      key: 'name',
      align: 'center',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'sex',
      align: 'center',
    },
    {
        title: '教育状况',
        dataIndex: 'educaDes',
        key: 'edu',
        align: 'center',
      },
      {
        title: '婚姻状况',
        dataIndex: 'marDes',
        key: 'mar',
        align: 'center',
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birth',
        align: 'center',
        sorter: (a, b) => a.birth - b.birth,
      },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
    },
  ];

class Customers extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: [],
        };
        // 保证 这个方法里面的 this 和 Customer 中的 this 是同一个对象
        // 或者使用箭头函数
        // this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler = (value) => {
      const that = this;
      console.log(that);
      axios.get('http://localhost:8088/customers/'+value).then((response)=>{
        let result = response.data.data;
        that.setState ({
          dataSource: result
        })
      }).catch(error => console.log(error));
    }

    onSortHandler = () => {
      const _this = this;
      axios.get('http://localhost:8088/customers/sort').then((response)=>{
        let result = response.data.data;
        _this.setState ({
          dataSource: result
        })
      }).catch(error => console.log(error));
    }

    componentDidMount(){
        const _this = this;
        axios.get('http://localhost:8088/customers').then(function(response){
            console.log(response)
            let result = response.data.data;
            _this.setState({
                dataSource: result
            })
            console.log(result);
        }).catch(function(error){
            console.log(error);
        });
    }

    render (){
        return(
            // <h1>客户信息</h1>
            <div>
              <Search 
                placeholder="请输入客户名..."
                enterButton="搜索"
                style={{ width: 300, marginBottom: "10px", marginRight: "30px"}}
                size="large"
                onSearch={this.onSearchHandler}
              />
              <Button
                type="primary "
                onClick={this.onSortHandler}
                size="large"
               >按客户名排序</Button> 
                            
              <Table 
                bordered 
                dataSource={this.state.dataSource} 
                columns={columns} 
              />
            </div>
        )
    }
}

export default Customers;