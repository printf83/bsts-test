import { core } from "@printf83/bsts";
import { choose } from "./choose.js";
import { initDownload } from "./download.js";
import { initTest } from "./test.js";

export const showMemoryTestDialog = () => {
	choose((arg) => {
		if (arg) {
			if (arg.downloadfirst) {
				initDownload({
					testId: core.UUID(),
					showchart: arg.showchart,
					callback: () => {
						initTest({
							testId: core.UUID(),
							count: arg.counter,
							random: arg.randomtest,
							checkduplicateid: arg.checkduplicateid,
							counttag: arg.counttag,
							showchart: arg.showchart,
							waitonesec: arg.waitonesec,
						});
					},
				});
			} else {
				initTest({
					testId: core.UUID(),
					count: arg.counter,
					random: arg.randomtest,
					checkduplicateid: arg.checkduplicateid,
					counttag: arg.counttag,
					showchart: arg.showchart,
					waitonesec: arg.waitonesec,
				});
			}
		}
	});
};
