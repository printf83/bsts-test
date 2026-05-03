const MOSTTAG: { title: string; count: number } = { title: "NONE", count: Number.MIN_VALUE };
const LESSTAG: { title: string; count: number } = { title: "NONE", count: Number.MAX_VALUE };

export const resetTagReport = () => {
	MOSTTAG.title = "NONE";
	MOSTTAG.count = Number.MIN_VALUE;
	LESSTAG.title = "NONE";
	LESSTAG.count = Number.MAX_VALUE;
};

export const getTagReport = (): {
	MOSTTAG: { title: string; count: number };
	LESSTAG: { title: string; count: number };
} => {
	return {
		MOSTTAG,
		LESSTAG,
	};
};

export const countTag = (pagetitle: string | undefined, contentBody: Element): number => {
	const tagCount = contentBody.getElementsByTagName("*").length;
	if (tagCount > MOSTTAG.count) {
		MOSTTAG.title = pagetitle ? pagetitle : "Bootstrap TS";
		MOSTTAG.count = tagCount;
	}

	if (tagCount < LESSTAG.count) {
		LESSTAG.title = pagetitle ? pagetitle : "Bootstrap TS";
		LESSTAG.count = tagCount;
	}

	return tagCount;
};
