import { forecastType } from 'types/types';
import cls from './Main.module.scss';
import { Tile } from 'components/Tile';
import { Forecast } from 'components/Forecast';
import { time } from 'utils/utils';

interface MainProps {
	forecastData: forecastType;
}
export const Main = ({ forecastData }: MainProps) => {
	const pressureCalculation = (item: number) => {
		return item / 100;
	};

	let list = forecastData.list.slice(0, 7);

	return (
		<div className={cls.Main}>
			<div className={cls.window}>
				<Forecast forecastData={forecastData} />
				<section className={cls.info}>
					<Tile title='Sun Rise' info={time(forecastData.city.sunrise)} />
					<Tile title='Sun Set' info={time(forecastData.city.sunset)} />
					<Tile title='Wind' info={`${Math.round(list[0].wind.speed)} km/h`} />
					<Tile title='Feel like' info={`${Math.round(list[0].main.feels_like)}°`} />
					<Tile title='Humidity' info={`${Math.round(list[0].main.humidity)}%`} />
					<Tile title='Pressure' info={`${pressureCalculation(list[0].main.pressure)}%`} />
				</section>
			</div>
		</div>
	);
};
