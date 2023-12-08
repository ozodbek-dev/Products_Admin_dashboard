import { useTable, Column, TableOptions } from "react-table";
export interface ITableHOCProps {}

// eslint-disable-next-line @typescript-eslint/ban-types
export function TableHOC<T extends Object>(
	columns: Column<T>[],
	data: T[],
	containerClassName: string,
	heading: string
) {
	return function HOC() {
		const options: TableOptions<T> = {
			columns,
			data,
		};
		const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(options);
		return (
			<div className={containerClassName}>
				<h2 className='heading'>{heading}</h2>
				<table className='table' {...getTableProps()}>
					<thead>
						{headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup && headerGroup.headers.map(column => (
									<th {...column.getHeaderProps()}>{column.render("Header")}</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
							return (
								<tr  {...row.getRowProps()}>
									{row.cells.map(cell => (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	};
}
