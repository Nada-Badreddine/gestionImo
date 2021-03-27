import { useEffect, useState } from 'react'
import { Table } from 'antd';

import { getAllClients } from '../services/clientsServices';

const columns = [
    {
      title: 'name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'lastName',
      width: 100,
      dataIndex: 'lastName',
      key: 'lastName',
      fixed: 'left',
    },
    {
      title: 'Ville',
      width: 100,
      dataIndex: 'ville',
      key: 'ville',
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
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
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