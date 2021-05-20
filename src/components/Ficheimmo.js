import { useEffect, useState } from "react";
import { Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { getAllImo, removeImo, editImo } from "../services/imoServices";

const columns = [
  {
    title: "Designation",
    dataIndex: "Designation",
    key: "Designation",
  },
  {
    title: "Numero Compte",
    dataIndex: "comptes",
    key: "Numero Compte",
  },
  {
    title: "Categorie",
    dataIndex: "category",
    key: "Categorie",
  },
  {
    title: "Type Imo",
    dataIndex: "type",
    key: "Type Imo",
  },
  {
    title: "Montant",
    dataIndex: "Montant",
    key: "Montant",
  },
  {
    title: "Quantitè",
    dataIndex: "Quantite",
    key: "Quantite",
  },
  {
    title: "Duree d'amortissement",
    dataIndex: "duree",
    key: "duree",
  },
  {
    title: "Date d'acquisition",
    dataIndex: "dateAquisition",
    key: "dateAquisition",
  },
  {
    title: "Date mis en service",
    dataIndex: "serviceDate",
    key: "serviceDate",
  },
  {
    title: "Type d'amortissement",
    dataIndex: "Type d'amortissement",
    key: "Type d'amortissement",
  },
  {
    title: "Coefficient",
    dataIndex: "Coefficient",
    key: "Coefficient",
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "Action",
    render: (_, im) => {
      return (
        <div>
          <DeleteOutlined
            onClick={async () => {
              console.log("immmmmmmmmmm", im);

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

export default function FicheImmo() {
  const [imo, setImo] = useState([]);

  useEffect(() => {
    getAllImo() // fetch as usual here!
      .then((data) => {
        setImo(data.data.result);
      });
  }, []);

  return <Table dataSource={imo} columns={columns} setImo={setImo} />;
}
