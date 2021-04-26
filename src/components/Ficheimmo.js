import { useEffect, useState } from "react";
import { Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";

import { getAllImo, removeImo, editImo } from "../services/imoServices";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);

<Space direction="vertical">
  <Search placeholder="input search text" onSearch={onSearch} enterButton />
</Space>;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const columns = [
  {
    title: "Designation",
    width: 100,
    dataIndex: "designation",
    key: "designation",
    fixed: "left",
  },
  {
    title: "Categorie",
    width: 100,
    dataIndex: "category",
    key: "category",
    fixed: "left",
  },

  {
    title: "Duree d'amortissement",
    width: 100,
    dataIndex: "compte_comptable",
    key: "compte Comptable",
    fixed: "left",
  },
  {
    title: "coefficient(degressif)",
    width: 100,
    dataIndex: "duree",
    key: "duree",
    fixed: "left",
  },
  {
    title: "montant",
    width: 100,
    dataIndex: "montant",
    key: "montant",
    fixed: "left",
  },
  {
    title: "Date mis en service",
    width: 100,
    dataIndex: "serviceDate",
    key: "date mis en service",
    fixed: "left",
  },
  {
    title: "Date d acquisition",
    width: 100,
    dataIndex: "dateAquisition",
    key: "Date d acquisition",
    fixed: "left",
  },
  {
    title: "Type d amortissement",
    width: 100,
    dataIndex: "Type d amortissement",
    key: "Type d amortissement",
    fixed: "left",
  },
  {
    title: "Type",
    width: 100,
    dataIndex: "type",
    key: "Type d amortissement",
    fixed: "left",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: (im) => {
      return (
        <div>
          <DeleteOutlined
            onClick={async () => {
              await removeImo(im._id);
              window.location.reload("/client");
            }}
          >
            supprimer
          </DeleteOutlined>

          <EditOutlined
            onClick={async () => {
              await editImo(im._id);
              window.location.reload("/client");
            }}
          >
            modifier
          </EditOutlined>
        </div>
      );
    },
  },
];

const FicheImmo = () => {
  const [imo, setImo] = useState([]);

  useEffect(() => {
    getAllImo() // fetch as usual here!
      .then((data) => {
        setImo(data.data.result);
      });
  }, []);

  console.log("imo", imo);

  return (
    <Table
      columns={columns}
      dataSource={imo}
      setImo={setImo}
      scroll={{ x: 1300 }}
    />
  );
};
export default FicheImmo;
