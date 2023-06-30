import cls from './Tile.module.scss';

interface TileProps {
	title?: string;
	info?: string | JSX.Element | number;
}

export const Tile = ({ title, info }: TileProps): JSX.Element => {
	return (
		<article className={cls.Tile}>
			<div className={cls.title}>
				<p>{title}</p>
			</div>
			<p className={cls.info}>{info}</p>
		</article>
	);
};
