import { useEffect } from 'react';

interface AppProps {
	className?: string;
}

const API =
	'http://api.openweathermap.org/data/2.5/weather?id=524901&&appid=083a784422196bb0c3f148b1cfa6709a';

export const App = ({ className }: AppProps) => {
	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	return <div></div>;
};

export default App;
