import { useEffect, useState } from "react";
import { Table } from "antd";

import { getAllImo, removeImo } from "../services/imoServices";

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
    dataIndex: "categorie",
    key: "categorie",
    fixed: "left",
  },
  {
    title: "Compte Comptable",
    width: 100,
    dataIndex: "compte Comptable",
    key: "compte Comptable",
    fixed: "left",
  },
  {
    title: "Duree",
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
    dataIndex: "date mis en service",
    key: "date mis en service",
    fixed: "left",
  },
  {
    title: "Date d acquisition",
    width: 100,
    dataIndex: "Date d acquisition",
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
    title: "Date d acquisition",
    width: 100,
    dataIndex: "categorie",
    key: "categorie",
    fixed: "left",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: (im) => {
      return (
        <button
          onClick={async () => {
            await removeImo(im._id);
            window.location.reload("/client");
          }}
        >
          supprimer
        </button>
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
