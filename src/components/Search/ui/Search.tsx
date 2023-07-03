import { ChangeEvent, useEffect, useState } from 'react';
import cls from './Search.module.scss';

interface SearchProps {}
export const Search = ({}: SearchProps) => {
	const [value, setName] = useState('');
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim();
		setName(value);

		if (value === '') {
			return '';
		}
	};

	console.log(value.trim());
	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=8&appid=083a784422196bb0c3f148b1cfa6709a`,
		)
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	});
	return (
		<section className={cls.Search}>
			<h1 className={cls.title}>Weather App</h1>
			<p className={cls.description}>Write the name of the city to view the weather</p>
			<div className={cls.searchForm}>
				<input value={value} onChange={onInputChange} type='text' />
				<div>
					<button>Search</button>
				</div>
			</div>
		</section>
	);
};
