import { forecastType } from 'types/types';
import cls from './Main.module.scss';
import { Tile } from 'components/Tile';
import { Forecast } from 'components/Forecast';
import { time } from 'utils/utils';
import { WeatherInfo } from 'components/WeatherInfo/ui/WeatherInfo';

interface MainProps {
	forecastData: forecastType;
}
export const Main = ({ forecastData }: MainProps) => {
	return (
		<div className={cls.Main}>
			<div className={cls.window}>
				<Forecast forecastData={forecastData} />
				<WeatherInfo forecastData={forecastData} />
			</div>
		</div>
	);
};
