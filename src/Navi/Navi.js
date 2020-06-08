import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './Navi.css'

import Home from '../components/Home';
import CustomerInfo from '../components/Customers';
import Detail from '../components/Details';
import Summary from '../components/Summary';

const { Header, Content, Footer, Sider } = Layout;

class SiderDemo extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Router>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="home" />
                            <span className="nav-text">
                                <Link to="/">首页</Link>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="user" />
                            <span className="nav-text">
                                <Link to="/customers">客户信息</Link>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="video-camera" />
                            <span className="nav-text">
                                <Link to="/details">交易明细</Link>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="upload" />
                            <span className="nav-text">
                                <Link to="/summary">汇总统计</Link>
                            </span>
                        </Menu.Item>
                    </Menu>
                    
                </Sider>
                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{cursor: 'pointer'}}
                            />
                        </span>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>数据报表实践</span>
                        <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>数据</Breadcrumb.Item>
                            <Breadcrumb.Item>报表</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                        
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/customers" component={CustomerInfo}></Route>
                            <Route path="/details" component={Detail}></Route>
                            <Route path="/summary" component={Summary}></Route>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
                </Router>
            </Layout>
        );
    }
}

export default SiderDemo;