import React,{Component} from 'react';
import { Table, Pagination  } from 'antd';
import axios from 'axios'

const columns = [
    {
      title: '客户姓名',
      dataIndex: 'surname',
      key: 'name',
      align: 'center',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'sex',
      align: 'center',
      sorter: (a, b) => a.sex - b.sex,
    },
    {
        title: '教育状况',
        dataIndex: 'educaDes',
        key: 'edu',
        align: 'center',
        sorter: (a, b) => a.edu - b.edu,
      },
      {
        title: '婚姻状况',
        dataIndex: 'marDes',
        key: 'mar',
        align: 'center',
        sorter: (a, b) => a.mar - b.mar,
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
      sorter: (a, b) => a.address.length - b.address.length,
    },
  ];

class Customers extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: [],
        }
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
        })
    }

    render (){
        return(
            // <h1>客户信息</h1>
            <Table 
                bordered 
                dataSource={this.state.dataSource} 
                columns={columns} 
            />
        )
    }
}

export default Customers;