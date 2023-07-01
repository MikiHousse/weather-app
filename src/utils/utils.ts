export const time = (milliseconds: number) => {
	const date = new Date(milliseconds * 1000);
	let hours = date.getHours().toString();
	let minutes = date.getMinutes().toString();

	if (hours.length <= 1) hours = `0${hours}`;
	if (minutes.length <= 1) minutes = `0${minutes}`;

	return `${hours}:${minutes}`;
};

export const pressureCalculation = (item: number) => {
	return item / 100;
};

export const dayName = (now: number) => {
	let name;
	switch (+now) {
		case 0:
			name = 'Sunday';
			break;
		case 1:
			name = 'Monday';
			break;
		case 2:
			name = 'Tuesday';
			break;
		case 3:
			name = 'Wednesday';
			break;
		case 4:
			name = 'Thursday';
			break;
		case 5:
			name = 'Friday';
			break;
		case 6:
			name = 'Saturday';
			break;
		default:
			name = '';
			break;
	}
	return name;
};
