import { WeatherForecast } from 'components/WeatherForecast';
import { useEffect, useState } from 'react';
import { forecastType } from 'types/types';

interface AppProps {}

export const App = ({}: AppProps) => {
	const API =
		'http://api.openweathermap.org/data/2.5/weather?id=524901&&appid=083a784422196bb0c3f148b1cfa6709a';

	const [weatherData, setWeatherData] = useState<forecastType | null>(null);

	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setWeatherData(data))
			.catch((err) => console.error(err));
	}, []);

	if (!weatherData) {
		return <div>...Loading</div>;
	}

	console.log(weatherData);

	return (
		<div>
			<WeatherForecast weatherData={weatherData} />
		</div>
	);
};

export default App;
