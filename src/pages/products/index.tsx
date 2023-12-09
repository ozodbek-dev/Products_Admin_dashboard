import { withSidebar } from "@/HOC";
import { TableHOC } from "@/HOC/table";
import { ReactElement, ReactNode, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";

interface IDataType {
	photo: ReactNode;
	name: string;
	price: number;
	stock: number;
	action: ReactElement;
}

const generateRandomId = () => Math.floor(Math.random() * 1000);

const columns: Column<IDataType>[] = [
	{
		Header: "Photo",
		accessor: "photo",
	},
	{
		Header: "Name",
		accessor: "name",
	},
	{
		Header: "Stock",
		accessor: "stock",
	},

	{
		Header: "Price",
		accessor: "price",
	},
	{
		Header: "Action",
		accessor: "action",
	},
];

const arr: IDataType[] = [
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Laptop",
		price: 999.99,
		stock: 20,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Smartphone",
		price: 699.99,
		stock: 50,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Wireless Headphones",
		price: 129.99,
		stock: 30,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Coffee Maker",
		price: 49.99,
		stock: 15,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Fitness Tracker",
		price: 79.99,
		stock: 40,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Smart TV",
		price: 899.99,
		stock: 25,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Gaming Console",
		price: 299.99,
		stock: 10,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Bluetooth Speaker",
		price: 59.99,
		stock: 35,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Tablet",
		price: 399.99,
		stock: 18,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
	{
		photo: (
			<img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23759758/bfarsace_190101_5333_0005.jpg' />
		),
		name: "Digital Camera",
		price: 499.99,
		stock: 12,
		action: <Link to={`/admin/product/${generateRandomId()}`}>Manage</Link>,
	},
];

function Products() {
	const [data] = useState<IDataType[]>(arr);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const Table = useCallback(TableHOC<IDataType>(columns, data, "dashboard-produc-box", "Products"), []);

	return <>{Table()}</>;
}

export default withSidebar(Products);
