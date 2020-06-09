import React,{Component} from 'react';
import { Table, Input} from 'antd';
import axios from 'axios';
import moment from 'moment'

const { Column } = Table;
const { Search } = Input;

class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource: [{
                transId: 1,
                surname: '张三',
                account: '100001',
                cardNbr: '643288604382793123',
                tranno: '1001',
                monthNbr: '5',
                bill: '2000.50',
                transType: '消费',
                txnDatetime: '2020-06-08',
            }],
        };
    }
    onSearchHandler = (value) => {
        const that = this;
        console.log(that);
        axios.get('http://localhost:8088/details/'+value).then((response)=>{
          let result = response.data.data;
          that.setState ({
            dataSource: result
          })
        }).catch(error => console.log(error));
    }

    formateDate = text =>{
        if(text !== '' && text !==undefined && text !== null && text !== 'none'){
            text = moment(text).format('YYYY/MM/DD hh:mm:ss');
            return text;
          }else{
            text ='--';
            return text;
          }
    }

    componentDidMount(){
        const _this = this;
        axios.get('http://localhost:8088/details').then(function(response){
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
            <div>
                <Search 
                placeholder="请输入客户名或交易类型..."
                enterButton="搜索"
                style={{ width: 450, marginBottom: "10px", marginRight: "30px" }}
                size="large"
                onSearch={this.onSearchHandler}
              />
            
                <Table bordered dataSource ={this.state.dataSource}>
                    <Column title ='交易id' dataIndex='transId' align='center' />
                    <Column title ='客户名' dataIndex='surname' align='center' />
                    <Column title ='账户号' dataIndex='account' align='center' />
                    <Column title ='卡号' dataIndex='cardNbr' align='center' />
                    <Column title ='交易流水号' dataIndex='tranno' align='center' />
                    <Column title ='账单月' dataIndex='monthNbr' align='center' />
                    <Column title ='交易金额' dataIndex='bill' align='center' />
                    <Column title ='交易类型' dataIndex='transType' align='center' />
                    <Column title ='交易时间' dataIndex='txnDatetime' render ={text =>this.formateDate(text)} align='center' />
                    {/* <Column title ='操作' dataIndex='operate' render ={(text,recorder) =>this.operateCell(text，recorder)}/> */}
                </Table>
            </div>
        )
    }
}

export default Details;