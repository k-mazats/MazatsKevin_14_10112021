import { useMemo } from 'react';
import { useTable } from 'react-table';
const EmployeesTable = (props) => {
	const data = useMemo(() => [...props.employees], [props]);
	const columns = useMemo(
		() => [
			{
				Header: 'First Name',
				accessor: 'firstName', // accessor is the "key" in the data
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
			},
			{
				Header: 'Start Date',
				accessor: 'startDateString',
			},
			{
				Header: 'Department',
				accessor: 'department',
			},
			{
				Header: 'Date of Birth',
				accessor: 'birthDateString',
			},
			{
				Header: 'Street',
				accessor: 'adressStreet',
			},
			{
				Header: 'City',
				accessor: 'adressCity',
			},
			{
				Header: 'State',
				accessor: 'adressState',
			},
			{
				Header: 'Zip Code',
				accessor: 'adressZip',
			},
		],
		[]
	);
	const tableInstance = useTable({ columns, data });
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;
	return (
		// apply the table props
		<table {...getTableProps()}>
			<thead>
				{
					// Loop over the header rows
					headerGroups.map((headerGroup) => (
						// Apply the header row props
						<tr {...headerGroup.getHeaderGroupProps()}>
							{
								// Loop over the headers in each row
								headerGroup.headers.map((column) => (
									// Apply the header cell props
									<th {...column.getHeaderProps()}>
										{
											// Render the header
											column.render('Header')
										}
									</th>
								))
							}
						</tr>
					))
				}
			</thead>
			{/* Apply the table body props */}
			<tbody {...getTableBodyProps()}>
				{
					// Loop over the table rows
					rows.map((row) => {
						// Prepare the row for display
						prepareRow(row);
						return (
							// Apply the row props
							<tr {...row.getRowProps()}>
								{
									// Loop over the rows cells
									row.cells.map((cell) => {
										// Apply the cell props
										return (
											<td {...cell.getCellProps()}>
												{
													// Render the cell contents
													cell.render('Cell')
												}
											</td>
										);
									})
								}
							</tr>
						);
					})
				}
			</tbody>
		</table>
	);
};

export default EmployeesTable;
