import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap'

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

const users = usersGererator(10);

function makePagination(size){
  let items = []
  for(let i = 1; i <= size; i++){
    items.push(
      <Pagination.Item key={i} onClick={this.props.active = true}>
      {i}
    </Pagination.Item>,
    );
  }

  return items;
}

let pageOnClick;

function pageOnClickHandler(page){
	pageOnClick = page;
}

function App() {
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
        {makePagination(10)}
      </Pagination>
    </div>
  );
}

export default App;
