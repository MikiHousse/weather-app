import { forecastType } from 'types/types';
import cls from './Forecast.module.scss';
import { time } from 'utils/utils';
import { WeatherStrip } from 'components/WeatherStrip/ui/WeatherStrip';

interface ForecastProps {
	forecastData: forecastType;
}

export const Forecast = ({ forecastData }: ForecastProps): JSX.Element => {
	return (
		<section>
			<h2 className={cls.city}>{forecastData.city.name}</h2>
			<h3 className={cls.temp}>{Math.round(forecastData.list[0].main.temp)}&deg;</h3>
			<WeatherStrip forecastData={forecastData} />
		</section>
	);
};
