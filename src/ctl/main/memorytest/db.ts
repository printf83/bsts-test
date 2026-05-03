import { core } from "@printf83/bsts";
import { menu } from "../_db.js";
import { MAIN_PAGE } from "../env.js";

let _docDB: string[] = [];
export const docDB = () => {
	if (_docDB.length > 0) {
		return _docDB;
	} else {
		_docDB = menu
			.map((i) => {
				return i.item.map((j) => {
					return j.value;
				});
			})
			.flat();

		return _docDB;
	}
};
export const getDocId = (random: boolean, max: number, count: number, mDB: string[]): string => {
	const mDBLength = mDB.length;
	const result = random ? mDB[core.rndBetween(0, mDBLength - 1)] : mDB[(max - count) % mDBLength];

	if (result) {
		return result;
	} else {
		if (random) {
			return getDocId(random, max, count, mDB);
		} else {
			return MAIN_PAGE;
		}
	}
};
