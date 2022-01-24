import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap'
import React, { useState } from 'react';

const tableData = usersGererator(45);
const sizePerPage = 5;

function makeTable(value, index) {
	return (
		<tr key={index}>
			<td>{value.id}</td>
			<td>{value.name}</td>
			<td>{value.age}</td>
		</tr>
	);
}

function usersGererator(size) {
	let items = [];
	for (let i = 0; i < size; i++) {
		items.push({ id: i + 1, name: `Name ${i + 1}`, age: 18 + i });
	}
	return items;
}

function MakePaginationItem(props) {
	// 一開始就選頁數 1
	const [active, setActive] = useState(1);
	const first = 1;
	const last = props.size;
	const size = props.size;

	let items = []

	items.push(
		<Pagination.Prev onClick={() => setActive(active - 1 < 1 ? last : active - 1)} />
	);

	if (size < 8) {
		// size < 8
		for (let i = 1; i <= size; i++) {
			items.push(
				<Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
					{i}
				</Pagination.Item>,
			);
		}
	} else {
		if (active - first < 4) {
			// size >= 8 && active - first < 4
			for (let i = 1; i <= 5; i++) {
				items.push(
					<Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
						{i}
					</Pagination.Item>,
				);
			}
			items.push(<Pagination.Ellipsis disabled/>);
			items.push(
				<Pagination.Item key={last} active={last === active} onClick={() => setActive(last)}>
					{last}
				</Pagination.Item>,
			);
		}else{
			if(last - active < 4){
				// size >= 8 && active - first >= 4 && last - active < 4
				items.push(
					<Pagination.Item key={first} active={first === active} onClick={() => setActive(first)}>
						{first}
					</Pagination.Item>,
				);
				items.push(<Pagination.Ellipsis disabled/>);
				for (let i = last - 4; i <= last; i++) {
					items.push(
						<Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
							{i}
						</Pagination.Item>,
					);
				}
			}else{
				// size >= 8 && active - first >= 4 && last - active >= 4
				items.push(
					<Pagination.Item key={first} active={first === active} onClick={() => setActive(first)}>
						{first}
					</Pagination.Item>,
				);
				items.push(<Pagination.Ellipsis disabled/>);
				for (let i = active - 1; i <= active + 1; i++) {
					items.push(
						<Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
							{i}
						</Pagination.Item>,
					);
				}
				items.push(<Pagination.Ellipsis disabled/>);
				items.push(
					<Pagination.Item key={last} active={last === active} onClick={() => setActive(last)}>
						{last}
					</Pagination.Item>,
				);
			}
		}
	}

	items.push(
		<Pagination.Next onClick={() => setActive(active + 1 > last ? first : active + 1)} />
	);

	return items;
}

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
					{/* {tableData.map(makeTable)} */}
				</tbody>
			</Table>
			<Pagination>
				<MakePaginationItem size={
					tableData.length % sizePerPage === 0 ? tableData.length / sizePerPage : tableData.length / sizePerPage + 1
				} />
			</Pagination>
		</div>
	);
}