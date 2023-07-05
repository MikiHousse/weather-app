import { ChangeEvent, useState } from 'react';
import { forecastType, searchType } from 'types/types';

export const getInfo = () => {
	const [value, setValue] = useState('');
	const [searchResult, setSearchResult] = useState<[]>([]);
	const [selectedLocation, setSelectedLocation] = useState<searchType | null>(null);
	const [forecastData, setForecastData] = useState<forecastType | null>(null);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim();
		setValue(value);
		getSearchLocation(value);
	};

	const getSearchLocation = (value: string) => {
		let API = `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=8&appid=083a784422196bb0c3f148b1cfa6709a`;

		fetch(API)
			.then((response) => response.json())
			.then((data) => (Array.isArray(data) ? setSearchResult(data as any) : []))
			.catch((err) => console.error(err));
	};

	const getLocationList = (select: searchType) => {
		let API = `https://api.openweathermap.org/data/2.5/forecast?lat=${select.lat}&lon=${select.lon}&units=metric&lang=en&appid=083a784422196bb0c3f148b1cfa6709a`;

		fetch(API)
			.then((response) => response.json())
			.then((data) => {
				const forecastData = {
					...data.city,
					list: data.list.slice(0, 16),
				};
				setForecastData(forecastData);
			})
			.catch((err) => console.error(err));
	};

	const getSelect = (item: searchType) => {
		setSelectedLocation(item);
		setValue(item.name);
		setSearchResult([]);
	};

	const getToInfo = () => {
		getLocationList(selectedLocation);
	};

	return {
		value,
		searchResult,
		onInputChange,
		forecastData,
		getToInfo,
		getSelect,
	};
};
