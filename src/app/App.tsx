import { Main } from 'components/Main';
import './style/index.scss';
import video1 from './video/video1.mp4';
import video2 from './video/video2.mp4';
import { time } from 'utils/utils';
import { Search } from 'components/Search';
import { getInfo } from './api';

interface AppProps {}

export const App = ({}: AppProps) => {
	const { value, searchResult, onInputChange, forecastData, getToInfo, getSelect } = getInfo();

	const timeNow = time(forecastData?.list[0].dt);
	const background = (time: string) => {
		let text = 'white';
		let video = video1;
		const hours = Number(time.split(':')[0]);
		const minutes = Number(time.split(':')[1]);
		const totalMinutes = hours * 60 + minutes;
		if (totalMinutes >= 6 * 60 && totalMinutes <= 18 * 60) {
			video = video2;
			text = 'black';
		}
		return { text, video };
	};

	const result = background(String(timeNow));

	return (
		<div className='app' style={{ color: `${result.text}` }}>
			<video className='backgroundVideo' src={result.video} autoPlay muted loop></video>
			{!forecastData ? (
				<Search
					value={value}
					searchResult={searchResult}
					onInputChange={onInputChange}
					getToInfo={getToInfo}
					getSelect={getSelect}
				/>
			) : (
				<Main forecastData={forecastData} />
			)}
		</div>
	);
};

export default App;
