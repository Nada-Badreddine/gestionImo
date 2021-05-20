import React from 'react'
import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

const Amortissementdeg = () => { 
    const [imo, setImo] = useState([]);
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
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
            
            render: (item) => {
              return (
                <Button
                  type="primary"
                  onClick={() => {
                    setVisible(true);
                    setCurrentItem(item);
                  }}
                >
                  plan d'amortissement
                </Button>
              );
            },
          },
    ]

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

      const columnsAmmo = [
        {
          title: "Années",
          dataIndex: "années",
          key: "années",
        },
        {
          title: "Base amortissement",
          dataIndex: "montant",
          key: "montant",
        },
        {
          title: "Annuité d'amortisssement",
          dataIndex: "annAmm",
          key: "annAmm",
        },
        {
          title: "Amortissement cumulé",
          dataIndex: "ammorCumm",
          key: "ammorCumm",
        },
        {
          title: "Valeur nette comptable",
          dataIndex: "vnc",
          key: "vnc",
        },
      ];













    return (
        <div>
            <h1>Hello </h1>
        </div>
    )
}

export default Amortissementdeg