import { useMemo } from 'react';
import {
	useTable,
	useGlobalFilter,
	usePagination,
	useSortBy,
} from 'react-table';
import GlobalFilter from './GlobalFilter/GlobalFilter';
import SetPagination from './SetPagination/setPagination';
import BrowsePages from './BrowsePages/BrowsePages';

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
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		preGlobalFilteredRows,
		setGlobalFilter,
		page,
		canPreviousPage,
		canNextPage,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: {
				pageIndex: 0,
				pageSize: 10,
				sortBy: [
					{
						id: 'firstName',
						desc: true,
					},
				],
			},
		},
		useGlobalFilter,

		useSortBy,
		usePagination
	);

	return (
		<>
			<SetPagination
				setPageSize={setPageSize}
				pageSize={pageSize}
			></SetPagination>
			<GlobalFilter
				preGlobalFilteredRows={preGlobalFilteredRows}
				globalFilter={state.globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
			<table className="table" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? ' 🔽'
												: ' 🔼'
											: ''}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<BrowsePages
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				pageCount={pageCount}
				gotoPage={gotoPage}
				previousPage={previousPage}
				nextPage={nextPage}
			></BrowsePages>
			<div>Showing {pageIndex > 1 ? pageIndex * pageSize : 1} to {pageSize > rows.length ? rows.length : pageSize} of {rows.length} entries</div>
		</>
	);
};

export default EmployeesTable;
