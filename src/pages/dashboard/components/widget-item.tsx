import { HiTrendingUp } from "react-icons/hi";

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

export default WidgetItem;