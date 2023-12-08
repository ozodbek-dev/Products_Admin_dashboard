import { withSidebar } from "@/HOC";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { CategoryItem, WidgetItem } from "./components";
import data from "@/assets/data.json";
import { BarChart } from "@/components/charts";

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
				<div className='revenue-chart'>
					<h2>Revenue & Transactions</h2>
					<BarChart
						data_2={[200, 244, 133, 855, 137, 455, 290]}
						data_1={[300, 144, 433, 655, 237, 755, 190]}
						title_1='Revenue'
						title_2='Transactions'
						bgColor_1='rgb(0,155,255)'
						bgColor_2='rgb(75,0,255)'
					/>
				</div>
				<div className='dashboard-categories'>
					<h2>Inventory</h2>
					<div>
						{data.categories.map(item => (
							<CategoryItem
								key={item.heading}
								color={`hsl(${item.value},${item.value * 4}%,50%)`}
								value={item.value}
								heading={item.heading}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default withSidebar(Dashboard);
