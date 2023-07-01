import { Tile } from 'components/Tile';
import cls from './WeatherInfo.module.scss';
import { pressureCalculation, time } from 'utils/utils';
import { forecastType } from 'types/types';

interface WeatherInfoProps {
	forecastData: forecastType;
}
export const WeatherInfo = ({ forecastData }: WeatherInfoProps) => {
	const list = forecastData.list[0];
	return (
		<section className={cls.info}>
			<Tile title='Sun Rise' info={time(forecastData.city.sunrise)} />
			<Tile title='Sun Set' info={time(forecastData.city.sunset)} />
			<Tile title='Wind' info={`${Math.round(list.wind.speed)} km/h`} />
			<Tile title='Feel like' info={`${Math.round(list.main.feels_like)}°`} />
			<Tile title='Humidity' info={`${Math.round(list.main.humidity)}%`} />
			<Tile title='Pressure' info={`${pressureCalculation(list.main.pressure)}%`} />
		</section>
	);
};
