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

	const pressureCalculation = (item: number) => {
		return item / 100;
	};

	let list = forecastData.list.slice(0, 7);

	return (
		<section className={cls.WeatherForecast}>
			<div className={cls.window}>
				<div>
					<h2 className={cls.city}>{forecastData.city.name}</h2>
					<h3 className={cls.temp}>{Math.round(list[0].main.temp)}&deg;</h3>
					<div className={cls.forecast}>
						{list.map((el, i) => (
							<div key={i}>
								<p>{i === 0 ? 'Now' : time(el.dt)}</p>
								<img
									alt={`weather-icon-${el.weather[0].description}`}
									src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
									width={40}
								/>
								<p>{Math.floor(el.main.temp)}&deg;</p>
							</div>
						))}
					</div>
				</div>

				<div className={cls.info}>
					<Tile title='Sun Rise' info={time(forecastData.city.sunrise)} />
					<Tile title='Sun Set' info={time(forecastData.city.sunset)} />
					<Tile title='Wind' info={`${Math.round(list[0].wind.speed)} km/h`} />
					<Tile title='Feel like' info={`${Math.round(list[0].main.feels_like)}°`} />
					<Tile title='Humidity' info={`${Math.round(list[0].main.humidity)}%`} />
					<Tile title='Pressure' info={`${pressureCalculation(list[0].main.pressure)}%`} />
				</div>
				<div className={cls.wind}></div>
			</div>
		</section>
	);
};
