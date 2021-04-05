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
      title: "Taux d'amortissement",
      width: 100,
      dataIndex: "taux d'amortissement",
      key: "taux d'amortissement",
      fixed: 'left',
    },
    {
        title: 'Valeur restante à amortir ',
        width: 100,
        dataIndex: 'valeur restante à amortir',
        key: 'valeur restante à amortir',
        fixed: 'left',
      },
      {
        title: "Montant de l’annuité",
        width: 100,
        dataIndex: "montant de l’annuité",
        key: "montant de l’annuité",
        fixed: 'left',
      },
    {
        title: 'Annuités cumulées',
        width: 100,
        dataIndex: 'annuités cumulées',
        key: 'annuités cumulées',
        fixed: 'left',
      },
      
      
      {
        title: 'Valeur Nette Comptable',
        width: 100,
        dataIndex: 'valeur nette comptable',
        key: 'valeur nette comptable',
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