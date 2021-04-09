import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

import { Table } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { getAllImo } from "../services/imoServices";

const Amortissement = () => {
  const [imo, setImo] = useState([]);
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: "designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Amortissement",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (props) => {
        console.log("props", props);
        return (
          <Button type="primary" onClick={() => setVisible(true)}>
            plan d'amortissement
          </Button>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columnss = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  useEffect(() => {
    getAllImo() // fetch as usual here!
      .then((data) => {
        setImo(data.data.result);
      });
  }, []);

  console.log("imo", imo);
  return (
    <>
      <Table dataSource={imo} columns={columns} setVisible={setVisible} />

      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Table dataSource={dataSource} columns={columnss} />;
      </Modal>
    </>
  );
};
export default Amortissement;
