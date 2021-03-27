import { useState, useEffect } from 'react'
import { Layout, Menu} from 'antd';


import {
  AppstoreOutlined,

  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
import './Client.css';
import FicheImmo from '../Ficheimmo';

const { Header, Content, Footer, Sider } = Layout;

const ContentCient = ({ currentPage }) => {
  switch(currentPage) {
    case 1 : return <FicheImmo />
    case 2 : return <p>products</p>
    case 3 : return <p>imo</p>
    // case 3 return <Imo />
  }
}

const Client = () => {
  const [currentPage, setCurrentPage]=useState(2)

    return(
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      
        
        <Menu.Item key="1" icon={<UploadOutlined />} onClick={() => setCurrentPage(1)}>
          users 1
        </Menu.Item>
        <Menu.Item key="2" icon={<BarChartOutlined />} onClick={() => setCurrentPage(2)}>
          products 2
        </Menu.Item>
        <Menu.Item key="3" icon={<CloudOutlined />} onClick={() => setCurrentPage(3)}>
          imo 3
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
       <ContentCient currentPage={currentPage} />
      </Content>
     
    </Layout>
  </Layout>
 
)
    };
    
export default Client;
