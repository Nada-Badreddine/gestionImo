import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  FormOutlined,
  CalculatorOutlined ,
  VideoCameraOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
import "./Client.css";
import FicheImmo from "../Ficheimmo";
import Saisi from "../saisi";
import Amortissement from "../amortissement";
import Amortissementdeg from "../amortissementdeg";
import Exploitation from "../exploitation";
import SaisiExploitation from "../saisiExploi";

const { Header, Content, Footer, Sider } = Layout;

const ContentCient = ({ currentPage }) => {
  switch (currentPage) {
    case 1:
      return <Saisi />;
    case 2:
      return <FicheImmo />;
    case 3:
      return <Amortissement />;
    case 4:
      return <Amortissementdeg />;
    case 5:
      return <Exploitation />;
      case 6:
      return <SaisiExploitation />;
  }
};

const Client = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item
            key="1"
            icon={<FormOutlined />}
            onClick={() => setCurrentPage(1)}
          >
            Saisi d'une immobilisation
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={<DatabaseOutlined />}
            onClick={() => setCurrentPage(2)}
          >
            Liste des immobilisations
          </Menu.Item>

          <Menu.Item
            key="3"
            icon={<CalculatorOutlined />}
            onClick={() => setCurrentPage(3)}
          >
            Plan d'amortissement lineaire
          </Menu.Item>

          <Menu.Item
            key="4"
            icon={<CalculatorOutlined />}
            onClick={() => setCurrentPage(4)}
          >
            Plan d'amortissement degressif
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<FormOutlined /> }
            onClick={() => setCurrentPage(6)}
          >
            Saisi Exploitation
          </Menu.Item>

          <Menu.Item
            key="5"
            icon={<DatabaseOutlined />}
            onClick={() => setCurrentPage(5)}
          >
            Exploitation
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <ContentCient currentPage={currentPage} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Client;
