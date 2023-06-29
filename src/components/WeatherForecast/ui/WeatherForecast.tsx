import { forecastType } from 'types/types';
import cls from './WeatherForecast.module.scss';

interface WeatherForecastProps {
	weatherData: forecastType;
}

export const WeatherForecast = ({ weatherData }: WeatherForecastProps) => {
	return (
		<section className={cls.WeatherForecast}>
			<div>
				<h2>Kazan</h2>
				<h3>20&deg;</h3>
				<div className={cls.wind}>
					<p>4 km/h </p>
					<p>Wind</p>
				</div>
				<ul className={cls.forecast}>
					<li>Now</li>
					<li>29</li>
					<li>30</li>
					<li>1</li>
				</ul>
				<div className={cls.sun}>
					<div>03:20</div>
					<div>20:20</div>
				</div>
			</div>
		</section>
	);
};
