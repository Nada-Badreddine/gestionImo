import { useState } from 'react'
import { Table } from 'antd';
import '../App.css';


const columns = [
    {
      title: 'Année',
      width: 100,
      dataIndex: 'année',
      key: 'année',
      fixed: 'left',
    },
    {
        title: 'VNC Debut ',
        width: 100,
        dataIndex: 'vnc debut',
        key: 'vnc debut',
        fixed: 'left',
      },
      {
        title: 'Annuité d amortissement',
        width: 100,
        dataIndex: 'annuité d amortissement',
        key: 'annuité d amortissement',
        fixed: 'left',
      },
    {
        title: 'Amortissement cumulés',
        width: 100,
        dataIndex: 'amortissement cumulés',
        key: 'amortissement cumulés',
        fixed: 'left',
      },
      
      
      {
        title: 'VNC Fin',
        width: 100,
        dataIndex: 'vnc fin',
        key: 'vnc fin',
        fixed: 'left',
      },
    
   ];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },];
 
  const Lineaire =() => {
    const [clients, setClients] = useState([]);

    
      return <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
  }
  export default Lineaire;