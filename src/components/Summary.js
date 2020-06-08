import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts'

class Summary extends Component {
    constructor(props){
        super(props);
        this.state={
            option: {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        };
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    render (){
        return(
            <div>
                <div id= "main1" style={{ width: 1000, height: 400 }}></div>
                <ReactEcharts
                    style = {{ width: 1000, height: 400}}
                    notMerge = { true }
                    lazyUpdate = { true }
                    option = { this.state.option }
                />
            </div>
            
        )
    }
}

export default Summary;