import { forecastType } from 'types/types';
import cls from './Forecast.module.scss';
import { WeatherStrip } from 'components/WeatherStrip';
import { dayName } from 'utils/utils';

interface ForecastProps {
	forecastData: forecastType;
}

export const Forecast = ({ forecastData }: ForecastProps): JSX.Element => {
	const date = new Date();
	const now = date.getDay();
	const monthName = date.toLocaleString('en-US', { month: 'long' });
	const day = date.getDate();
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const time = date.toLocaleTimeString('en-US').slice(-2);

	return (
		<section>
			<h2 className={cls.city}>{forecastData.name}</h2>
			<h3 className={cls.temp}>{Math.round(forecastData.list[0].main.temp)}&deg;</h3>
			<p className={cls.localInfo}>
				{forecastData.country}, {dayName(now)}, {monthName} {day}, {year}, {hours}:{minutes} {time}
			</p>
			<WeatherStrip forecastData={forecastData} />
		</section>
	);
};
