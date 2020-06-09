import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
// import echarts from 'echarts'
import axios from 'axios';

class Summary extends Component {
    constructor(props){
        super(props);
        this.state={
            // 折线图
            option: {
                // xAxis: {
                //     type: 'category',
                //     data: this.state.xdata,
                // },
                // yAxis: {
                //     type: 'value'
                // },
                // series: [{
                //     data: this.state.ydata,
                //     type: 'line'
                // }]
            },
            // 柱状图
            option1: {
                // title: { text: '用户近三个月消费笔数' },
                // tooltip: {},
                // xAxis: {
                //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                // },
                // yAxis: {},
                // series: [{
                //     name: '销量',
                //     type: 'bar',
                //     data: [5, 20, 36, 10, 10, 20]
                // }]
            },

            // 饼图
            option2: {
                // title: {
                //     text: '近一个月的消费总金额和还款总金额占比',
                //     left: 'left'
                // },
                // legend: {
                //     orient: 'vertical',
                //     left: 'right',
                // },
                // series: [
                //     {
                //         name: '交易金额',
                //         type: 'pie',
                //         radius: '55%',
                //         data: [
                //             {value: 335, name: '消费总金额'},
                //             {value: 310, name: '还款总金额'},
                           
                //         ]
                //     }
                // ]
            },
            
        };
    }

    componentDidMount() {
        const _this = this;
        axios.get('http://localhost:8088/day-tran-amt').then(function(response){
            // console.log(response)
            let result = response.data.data;
            let xresult = [];
            let yresult = [];
            console.log(result);
            for(let i = 0; i < result.length; i++) {
                xresult[i] = result[i].date;
                yresult[i] = result[i].tran_amt
            }
            _this.setState({
                option:{
                    title: { text: '近一个月每天的交易总金额' },
                    xAxis: {
                        type: 'category',
                        data: xresult,
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yresult,
                        type: 'line'
                    }],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                          type: 'cross',
                          label: {
                            backgroundColor: '#6a7985'
                          }
                        }
                      },
                }        
            })
        }).catch(function(error){
            console.log(error);
        });

        axios.get('http://localhost:8088/month-tran-cnt').then(function(response){
            // console.log(response)
            let result = response.data.data;
            let xresult = [];
            let yresult = [];
            console.log(result);
            for(let i = 0; i < result.length; i++) {
                xresult[i] = result[i].surname;
                yresult[i] = result[i].cnt
            }
            _this.setState({
                option1:{
                    title: { text: '用户近三个月消费笔数' },
                    tooltip: {},
                    xAxis: {
                        data: xresult
                    },
                    yAxis: {},
                    series: [{
                        name: '消费笔数',
                        type: 'bar',
                        data: yresult
                    }]
                },       
            })
        }).catch(function(error){
            console.log(error);
        });

        axios.get('http://localhost:8088/tans-pay-amt').then(function(response){
            // console.log(response)
            let result = response.data.data;
            console.log(result);
            let tran_amt = result.tranAmt;
            let pay_amt = result.payAmt;
            _this.setState({
                option2:{
                    title: {
                        text: '近一个月的消费总金额和还款总金额占比',
                        left: 'left'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },                    
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                    },
                    series: [
                        {
                            name: '交易金额',
                            type: 'pie',
                            radius: '55%',
                            data: [
                                {value: tran_amt, name: '消费总金额'},
                                {value: pay_amt, name: '还款总金额'},
                            ]
                        }
                    ]
                },       
            })
        }).catch(function(error){
            console.log(error);
        });   
    }

    render (){
        return(
            <div>
                {/* <div id= "main1" style={{ width: 1000, height: 400 }}></div> */}
                <ReactEcharts
                    style = {{ width: 1000, height: 400}}
                    notMerge = { true }
                    lazyUpdate = { true }
                    option = { this.state.option }
                />
                <ReactEcharts
                    style = {{ width: 1000, height: 400}}
                    notMerge = { true }
                    lazyUpdate = { true }
                    option = { this.state.option1 }
                />
                <ReactEcharts
                    style = {{ width: 1000, height: 400}}
                    notMerge = { true }
                    lazyUpdate = { true }
                    option = { this.state.option2 }
                />
                
            </div>
            
        )
    }
}

export default Summary;