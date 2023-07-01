import { forecastType } from 'types/types';
import cls from './WeatherStrip.module.scss';
import { time } from 'utils/utils';

interface WeatherStripProps {
	forecastData: forecastType;
}

export const WeatherStrip = ({ forecastData }: WeatherStripProps): JSX.Element => {
	const list = forecastData.list.slice(0, 7);
	return (
		<div className={cls.forecast}>
			{list.map((el, i) => (
				<div key={i}>
					<p className={cls.date}>{i === 0 ? 'Now' : time(el.dt)}</p>
					<img
						className={cls.icon}
						alt={`weather-icon-${el.weather[0].description}`}
						src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
						width={40}
					/>
					<p className={cls.temp}>{Math.floor(el.main.temp)}&deg;</p>
				</div>
			))}
		</div>
	);
};
