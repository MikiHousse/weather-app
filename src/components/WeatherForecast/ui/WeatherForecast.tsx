import { forecastType } from 'types/types';
import cls from './WeatherForecast.module.scss';
import { Tile } from 'components/Tile';

interface WeatherForecastProps {
	forecastData: forecastType;
}
export const WeatherForecast = ({ forecastData }: WeatherForecastProps) => {
	let time = (milliseconds: number) => {
		const date = new Date(milliseconds * 1000);
		let hours = date.getHours().toString();
		let minutes = date.getMinutes().toString();

		if (hours.length <= 1) hours = `0${hours}`;
		if (minutes.length <= 1) minutes = `0${minutes}`;

		return `${hours}:${minutes}`;
	};

	let list = forecastData.list.slice(0, 7);
	return (
		<section className={cls.WeatherForecast}>
			<div className={cls.window}>
				<h2 className={cls.city}>Kazan</h2>
				<h3 className={cls.temp}>20&deg;</h3>
				<ul className={cls.forecast}>
					{list.map((el, i) => (
						<li key={i}>{Math.floor(el.main.temp)}&deg;</li>
					))}
				</ul>
				<div className={cls.info}>
					<Tile>
						<p>{time(forecastData.city.sunrise)}</p>
					</Tile>
					<Tile>{time(forecastData.city.sunset)}</Tile>
					<Tile>
						<p>Wind</p>
						<p>4 km/h </p>
					</Tile>
					<Tile>
						<p>Feel like</p>
						<p>20&deg;</p>
					</Tile>
					<Tile>
						<p>Humidity</p>
						<p>30%</p>
					</Tile>
					<Tile>
						<p>pressure</p>
						<p>0%</p>
					</Tile>
				</div>
				<div className={cls.wind}></div>
			</div>
		</section>
	);
};
