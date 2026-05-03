export let speedDB: { id: string; title: string; data: number[] }[];
export const addToSpeedDB = ({ id, title, data }: { id: string; title: string; data: number }) => {
	const index = speedDB.findIndex((i) => i.id === id);
	if (index > -1) {
		speedDB[index]!.data.push(data);
	} else {
		speedDB.push({ id: id, title: title, data: [data] });
	}
};

export const getSpeedDB = () => {
	return speedDB;
};

export const resetSpeedDB = () => {
	speedDB = [];
};
