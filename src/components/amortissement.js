import { useState } from 'react'
import { Table } from 'antd';
import '../App.css';
import { Link } from 'react-router-dom';

const columns = [
    {
      title: 'Designation',
      width: 100,
      dataIndex: 'designation',
      key: 'designation',
      fixed: 'left',
    },
    
    {
      title: 'Amortissement',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () =>  <Link to='lineaire'>
      <button className='btn-started'>Amortissement lineaire</button>
 
 </ Link>,
  
 
}];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },];
 
  const Amortissement =() => {
    const [clients, setClients] = useState([]);

    
      return <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
  }
  export default Amortissement;