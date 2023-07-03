import { Main } from 'components/Main';
import { useEffect, useState } from 'react';
import { forecastType } from 'types/types';
import './style/index.scss';
import video1 from './video/video1.mp4';
import video2 from './video/video2.mp4';
import { time } from 'utils/utils';
import { Search } from 'components/Search';

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

	const list = time(forecastData.list[0].dt);
	const background = (time: string) => {
		let video;
		if (String(time) >= '6:00' && String(time) < '18:00') {
			video = video1;
		} else {
			video = video2;
		}
		return video;
	};

	return (
		<div className='app'>
			<video className='backgroundVideo' src={background(String(list))} autoPlay muted loop></video>
			{/* <Main forecastData={forecastData} /> */}
			<Search />
		</div>
	);
};

export default App;
