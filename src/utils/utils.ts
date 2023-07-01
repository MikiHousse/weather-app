export const time = (milliseconds: number) => {
	const date = new Date(milliseconds * 1000);
	let hours = date.getHours().toString();
	let minutes = date.getMinutes().toString();

	if (hours.length <= 1) hours = `0${hours}`;
	if (minutes.length <= 1) minutes = `0${minutes}`;

	return `${hours}:${minutes}`;
};
