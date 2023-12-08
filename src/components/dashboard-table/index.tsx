import { TableHOC } from "@/HOC/table";
import { Column } from "react-table";

interface IDataType {
	id: string;
	quantity: number;
	discount: number;
	amount: number;
	status: string;
}
const columns: Column<IDataType>[] = [
	{
		Header: "Id",
		accessor: "id",
	},
	{
		Header: "Quantity",
		accessor: "quantity",
	},
	{
		Header: "Discount",
		accessor: "discount",
	},
	{
		Header: "Amount",
		accessor: "amount",
	},
	{
		Header: "Status",
		accessor: "status",
	},
];

const DashboardTable = ({ data = [] }: { data: IDataType[] }) => {
	return TableHOC<IDataType>(columns, data, "transaction-box", "Top Transaction")();
};

export default DashboardTable;
