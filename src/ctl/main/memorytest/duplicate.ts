const report = (pagetitle: string | undefined, duplicateID: string[]) => {
	const duplicateIDCount = duplicateID.length;
	if (duplicateIDCount > 0) {
		//need to show html
		const duplicateIDList = duplicateID.map((id) => {
			const elements = document.querySelectorAll(`[id="${id}"]`);

			return {
				id: id,
				elem: Array.from(elements).map((el) => el.outerHTML),
			};
		});

		console.warn(
			`${pagetitle} have ${duplicateIDCount} duplicate key${duplicateIDCount > 1 ? "s" : ""}`,
			duplicateIDList
		);
	}
};
export const checkDuplicateID = (pagetitle?: string) => {
	const duplicateIds = Array.from(document.querySelectorAll("[id]"))
		.map((v: Element) => v.id)
		.reduce((acc: { [key: string]: number }, v: string) => {
			acc[v] = (acc[v] || 0) + 1;
			return acc;
		}, {});

	const duplicates = Object.entries(duplicateIds)
		.filter(([, value]: [string, number]) => value > 1)
		.map(([key]: [string, number]) => key);

	report(pagetitle, duplicates);
};
