import { ChangeEvent, useEffect, useState } from 'react';
import cls from './Search.module.scss';
import { searchType } from 'types/types';

interface SearchProps {}
export const Search = ({}: SearchProps) => {
	const [value, setValue] = useState('');
	const [searchList, setSearchList] = useState<[]>([]);
	const [select, setSelect] = useState(null);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim();
		setValue(value);
		getSeatch(value);
	};

	const getSeatch = (value: string) => {
		const API = `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=8&appid=083a784422196bb0c3f148b1cfa6709a`;

		fetch(API)
			.then((response) => response.json())
			.then((data) => (Array.isArray(data) ? setSearchList(data as any) : []))
			.catch((err) => console.error(err));
	};

	const getSelect = (item: searchType) => {
		setSelect(item);
		setValue(item.name);
		setSearchList([]);
	};

	if (!searchList) {
		return <div>...Loading</div>;
	}

	useEffect(() => {
		getSeatch;
	}, [value, searchList]);

	return (
		<section className={cls.Search}>
			<h1 className={cls.title}>Weather App</h1>
			<p className={cls.description}>Write the name of the city to view the weather</p>
			<div className={cls.searchForm}>
				<input value={value} onChange={onInputChange} type='text' />
				<ul className={cls.list}>
					{searchList.length !== 0
						? searchList.map((el: searchType, i) => (
								<li key={i} onClick={() => getSelect(el)}>
									{el.name}
								</li>
						  ))
						: []}
				</ul>
				<div>
					<button>Search</button>
				</div>
			</div>
		</section>
	);
};
