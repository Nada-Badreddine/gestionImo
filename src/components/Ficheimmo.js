import { useEffect, useState } from 'react'
import { Table } from 'antd';

import { getAllClients } from '../services/clientsServices';

const columns = [
    {
      title: 'Designation',
      width: 100,
      dataIndex: 'designation',
      key: 'designation',
      fixed: 'left',
    },
    {
      title: 'Categorie',
      width: 100,
      dataIndex: 'categorie',
      key: 'categorie',
      fixed: 'left',
    },
    {
      title: 'Compte Comptable',
      width: 100,
      dataIndex: 'compte Comptable',
      key: 'compte Comptable',
      fixed: 'left',
    },
    {
      title: 'Duree',
      width: 100,
      dataIndex: 'duree',
      key: 'duree',
      fixed: 'left',
    },
    {
      title: 'montant',
      width: 100,
      dataIndex: 'montant',
      key: 'montant',
      fixed: 'left',
    },
    {
      title: 'Date mis en service',
      width: 100,
      dataIndex: 'date mis en service',
      key: 'date mis en service',
      fixed: 'left',
    },
    {
      title: 'Date d acquisition',
      width: 100,
      dataIndex: 'Date d acquisition',
      key: 'Date d acquisition',
      fixed: 'left',
    },
    {
      title: 'Type d amortissement',
      width: 100,
      dataIndex: 'Type d amortissement',
      key: 'Type d amortissement',
      fixed: 'left',
    },
    
    {
      title: 'Date d acquisition',
      width: 100,
      dataIndex: 'categorie',
      key: 'categorie',
      fixed: 'left',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>3amar bzwer</a>,
    },
  ];

  const FicheImmo =() => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
      getAllClients()// fetch as usual here!
      .then(data => {
        setClients(data.data.result)
       });
  
    }, [])
      return <Table columns={columns} dataSource={clients} scroll={{ x: 1300 }} />
  }
  export default FicheImmo;