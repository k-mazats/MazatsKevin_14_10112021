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
import SetSorting from './SetSorting/SetSorting';

import './EmployeesTable.css';

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
				accessor: 'startDate',
			},
			{
				Header: 'Department',
				accessor: 'department',
			},
			{
				Header: 'Date of Birth',
				accessor: 'birthDate',
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
						desc: false,
					},
				],
			},
			disableSortRemove: true,
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);
	const getPageMin = () => {
		if (rows.length === 0) {
			return 0;
		} else if (pageIndex > 0) {
			return pageIndex * pageSize + 1;
		}
		return 1;
	};
	const getPageMax = () => {
		const pageMax = pageSize * (pageIndex + 1);
		if (pageSize > rows.length) {
			return rows.length;
		} else if (pageMax > rows.length) {
			return rows.length;
		}
		return pageMax;
	};
	return (
		<>
			<div className="table-controls">
				<SetPagination
					setPageSize={setPageSize}
					pageSize={pageSize}
				></SetPagination>
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={state.globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
			</div>
			{rows.length > 0 ? (
				<table className="table" {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										<div className="table-heading">
											<span>{column.render('Header')}</span>
											
											{column.isSorted ? (
												column.isSortedDesc ? (
													<SetSorting direction="descending"></SetSorting>
												) : (
													<SetSorting direction="ascending"></SetSorting>
												)
											) : (
												<SetSorting direction="unsorted"></SetSorting>
											)}
										</div>
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
											<td
												{...cell.getCellProps()}
												className={cell.column.isSorted ? 'sorted' : null}
											>
												{cell.render('Cell')}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<div className="table-placeholder">No data available in table</div>
			)}
			<div className="pages-controls">
				<div>
					Showing {getPageMin()} to {getPageMax()} of {rows.length} entries
				</div>
				<BrowsePages
					canPreviousPage={canPreviousPage}
					canNextPage={canNextPage}
					pageCount={pageCount}
					gotoPage={gotoPage}
					previousPage={previousPage}
					nextPage={nextPage}
					pageIndex={pageIndex}
				></BrowsePages>
			</div>
		</>
	);
};

export default EmployeesTable;
