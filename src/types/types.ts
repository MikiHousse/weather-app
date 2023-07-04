export type forecastType = {
	city: {
		country: string;
		id: number;
		name: string;
		population: number;
		sunrise: number;
		sunset: number;
		timezone: number;
	};
	list: [
		{
			dt: number;
			main: {
				feels_like: number;
				humidity: number;
				pressure: number;
				temp: number;
				temp_max: number;
				temp_min: number;
			};
			weather: [
				{
					main: string;
					icon: string;
					description: string;
				},
			];
			wind: {
				speed: number;
				gust: number;
				deg: number;
			};
			clouds: {
				all: number;
			};
			pop: number;
			visibility: number;
		},
	];
	sunrise: number;
	sunset: number;
};

export type searchType = {
	name: string;
	lat: number;
	lon: number;
	country: string;
};
