import { IconType } from "react-icons";
import { Link, useLocation, Location } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar,FaChartPie,FaChartLine, FaStopwatch , FaGamepad,} from "react-icons/fa";

function AdminSidebar() {
	const location = useLocation();
	return (
		<aside>
			<h1>Logo.</h1>
			<DivOne location={location} />
      <DivTwo location={location} />
      <DivThree location={location}/>
		</aside>
	);
}

interface LiProps {
	url: string;
	text: string;
	location: Location;
	Icon: IconType;
}

const DivTwo = ({ location }: { location: Location }): JSX.Element => (
	<div>
		<h5>Charts</h5>
		<ul>
			<Li url='/admin/chart/bar' location={location} Icon={FaChartBar} text='Bar' />
			<Li url='/admin/chart/pie' location={location} Icon={FaChartPie} text='Pie' />
			<Li url='/admin/chart/line' location={location} Icon={FaChartLine} text='Line' />
		</ul>
	</div>
);
const DivOne = ({ location }: { location: Location }): JSX.Element => (
	<div>
		<h5>Dashboard</h5>
		<ul>
			<Li url='/admin/dashboard' location={location} Icon={RiDashboardFill} text='Dashboard' />
			<Li url='/admin/products' location={location} Icon={RiShoppingBag3Fill} text='Product' />
			<Li url='/admin/customers' location={location} Icon={IoIosPeople} text='Customer' />
			<Li url='/admin/transactions' location={location} Icon={AiFillFileText} text='Transactions' />
		</ul>
	</div>
);
const DivThree = ({ location }: { location: Location }): JSX.Element => (
	<div>
		<h5>Apps</h5>
		<ul>
			<Li url='/admin/app/stopwatch' location={location} Icon={FaStopwatch} text='Stopwatch' />
			<Li url='/admin/app/coupon' location={location} Icon={RiCoupon3Fill} text='Coupon' />
			<Li url='/admin/app/toss' location={location} Icon={FaGamepad} text='Toss' />
		</ul>
	</div>
);

const Li = ({ url, location, Icon, text }: LiProps) => (
	<li className={location.pathname.includes(url) ? "active" : ""}>
		<Link to={url}>
			<Icon />
			{text}
		</Link>
	</li>
);

export default AdminSidebar;
