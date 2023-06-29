import { WeatherForecast } from 'components/WeatherForecast';
import { useEffect, useState } from 'react';
import { forecastType } from 'types/types';
import './style/index.scss';

interface AppProps {}

export const App = ({}: AppProps) => {
	const API =
		'https://api.openweathermap.org/data/2.5/forecast?lat=55.7522&lon=37.6156&units=metric&lang=en&appid=083a784422196bb0c3f148b1cfa6709a';
	const [forecastData, setForecastData] = useState<forecastType | null>(null);
	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setForecastData(data))
			.catch((err) => console.error(err));
	}, []);

	if (!forecastData) {
		return <div>...Loading</div>;
	}

	console.log(forecastData);

	return (
		<div className='app'>
			<WeatherForecast forecastData={forecastData} />
		</div>
	);
};

export default App;
