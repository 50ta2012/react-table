import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap'
import React, { useState } from 'react';

function makeTable(value, index){
  return (
    <tr key={index}>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.age}</td>
    </tr>
  );
}

function usersGererator(size){
  let items = [];
  for (let i = 0; i < size; i++) {
    items.push({ id: i + 1, name: `Name ${i + 1}`, age: 18 + i });
  }
  return items;
}

const users = usersGererator(12);

function MakePaginationItem(props) {
  // 一開始就選頁數 1
  const [active, setActive] = useState(1);

  let items = []
  for(let i = 1; i <= props.size; i++){
    items.push(
      <Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
      {i}
    </Pagination.Item>,
    );
  }

  return items;
}

const sizePerPage = 5;


export default function App() {
  return (
    <div className="App">
      <h1>React Bootstrap Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map(makeTable)}
        </tbody>
      </Table>
      <Pagination>
        <MakePaginationItem size={
          users.length%sizePerPage === 0 ? users.length/sizePerPage : users.length/sizePerPage + 1
          } />
      </Pagination>
    </div>
  );
}