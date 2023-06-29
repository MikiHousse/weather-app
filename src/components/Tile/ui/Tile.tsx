import { ReactNode } from 'react';
import cls from './Tile.module.scss';

interface TileProps {
	children: ReactNode;
}

export const Tile = ({ children }: TileProps) => {
	return <div className={cls.Tile}>{children}</div>;
};
