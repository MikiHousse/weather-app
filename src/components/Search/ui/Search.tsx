import { ChangeEvent } from 'react';
import cls from './Search.module.scss';
import { searchType } from 'types/types';

interface SearchProps {
	value: string;
	searchResult: [];
	onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	getToInfo: () => void;
	getSelect: (item: searchType) => void;
}

export const Search = ({
	value,
	searchResult,
	onInputChange,
	getToInfo,
	getSelect,
}: SearchProps) => {
	return (
		<section className={cls.Search}>
			<h1 className={cls.title}>Weather App</h1>
			<p className={cls.description}>Write the name of the city to view the weather</p>
			<div className={cls.searchForm}>
				<input value={value} onChange={onInputChange} type='text' />
				<ul className={cls.list}>
					{searchResult.length !== 0
						? searchResult.map((el: searchType, i) => (
								<li key={i} onClick={() => getSelect(el)}>
									{el.name}
								</li>
						  ))
						: []}
				</ul>
				<div>
					<button onClick={getToInfo}>Search</button>
				</div>
			</div>
		</section>
	);
};
