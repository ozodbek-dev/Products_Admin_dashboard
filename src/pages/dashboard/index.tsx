import { withSidebar } from "@/HOC";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

const userImg: string =
	"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png";
const Dashboard = () => {
	return (
		<>
			<div className='bar'>
				<BsSearch />

				<input type='text' placeholder='Search for data, users, docs' />

				<FaRegBell />
				<img src={userImg} alt='User' />
			</div>
			<section className='widget-container'>
				<WidgetItem heading='Revenue' color='rgb(0,155,255)' value={340000} percent={40} amount={true} />

				<WidgetItem heading='Users' color='rgb(0,198,202 )' value={400} percent={-14} amount={true} />

				<WidgetItem heading='Transactions' color='rgb(0,155,255)' value={23000} percent={80} />

				<WidgetItem heading='Revenue' color='rgb(75,0,255)' value={1000} percent={30} amount={true} />
			</section>

			<section className='graph-container'>
				<div className="revenue-chart">
					<h2>Revenue & Transactions</h2>
				</div>
				<div className="dashboard-categories">
					<h2>Inventory</h2>
				</div>
			</section>
		</>
	);
};

interface WidgetItemProps {
	heading: string;
	value: number;
	percent: number;
	color: string;
	amount?: boolean;
}

const WidgetItem = ({ heading, amount = false, value, percent, color }: WidgetItemProps): JSX.Element => (
	<article className='widget'>
		<div className='widget-info'>
			<p>{heading}</p>
			<h4>{amount ? `$${value}` : value}</h4>
			{percent > 0 ? (
				<span className='text-green'>
					<HiTrendingUp /> + {percent}%{" "}
				</span>
			) : (
				<span className='text-red'>
					<HiTrendingUp /> + {percent}%{" "}
				</span>
			)}
		</div>

		<div
			className='widget-circle'
			style={{
				background: `conic-gradient(${color} ${(Math.abs(percent) / 100) * 360}deg, rgb(255,255,255) 0)`,
			}}
		>
			<span style={{ color }}>{percent}%</span>
		</div>
	</article>
);

export default withSidebar(Dashboard);
