import './App.css';
import ReactTable from './table/ReactTable';

/* Data generator */
function usersGererator(size) {
  let items = [];
  for (let i = 0; i < size; i++) {
    items.push({ id: i + 1, name: `Name ${i + 1}`, age: 18 + i });
  }
  return items;
}

/* Parameter */
const tableData = usersGererator(100);

const sizePerPage = 10;

const TableHeader = () => {
  return (
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  )
}

const tableBody = (value, index) => {
  return (
    <tr key={index}>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.age}</td>
    </tr>
  );
}

/* export */
export default function App() {
  return (
    <div className="App">
      <h1>React Bootstrap Table</h1>
      <ReactTable tableData={tableData} sizePerPage={sizePerPage} tableHeader={TableHeader} tableBody={tableBody} />
    </div>
  );
}