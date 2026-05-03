import { b, h } from "@printf83/bsts";
import { menuItem } from "./../_db.js";

export type ChooseArg = {
	counter: number;
	randomtest: boolean;
	downloadfirst: boolean;
	checkduplicateid: boolean;
	counttag: boolean;
	showchart: boolean;
	waitonesec: boolean;
};

const getChoose = (target: Element): ChooseArg => {
	return {
		counter: parseInt(target.getAttribute("data-counter")!),
		randomtest: (document.getElementById("memory-test-random") as HTMLInputElement).checked,
		downloadfirst: (document.getElementById("memory-test-downloadfirst") as HTMLInputElement)
			.checked,
		checkduplicateid: (document.getElementById("memory-test-duplicateid") as HTMLInputElement)
			.checked,
		counttag: (document.getElementById("memory-test-counttag") as HTMLInputElement).checked,
		showchart: (document.getElementById("memory-test-showchart") as HTMLInputElement).checked,
		waitonesec: (document.getElementById("memory-test-wait") as HTMLInputElement).checked,
	};
};

export const choose = (callback: (arg?: ChooseArg) => void) => {
	const docCounter = menuItem().length;

	b.modal.show(
		new b.modal.container({ backdrop: "static", view: "center", scrollable: true }, [
			new b.modal.body({ id: "memory-test-dialog" }, [
				new h.p(
					"{{s::Memory test}}. Please choose a button below to open a specific number of pages for detecting memory leaks. You can use either the {{Memory Monitor Program}} on your device or the {{Developer Tools}} in your browser. Before starting the memory leak test, remember the current memory usage. After the test, compare the memory difference. The memory should return to its original state after the test."
				),

				new h.p([
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Calcuate element",
						checked: false,
						id: "memory-test-counttag",
					}),
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Check duplicate id",
						checked: false,
						id: "memory-test-duplicateid",
					}),
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Random page",
						checked: false,
						id: "memory-test-random",
					}),
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Wait 1 second for each page",
						checked: false,
						id: "memory-test-wait",
					}),
					b.form.check({
						type: "checkbox",
						switch: true,
						label: "Show chart",
						checked: true,
						id: "memory-test-showchart",
					}),
					b.form.check({
						container: { marginBottom: 3 },
						type: "checkbox",
						switch: true,
						label: "Download resouce first",
						checked: true,
						id: "memory-test-downloadfirst",
					}),
					new h.div(
						{
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr",
							gap: 2,
						},
						[
							~~(docCounter * 0.1),
							~~(docCounter * 0.3),
							~~(docCounter * 0.5),
							docCounter,
							docCounter * 3,
							docCounter * 5,
							docCounter * 10,
							docCounter * 30,
							docCounter * 50,
						].map((i) => {
							return new b.button(
								{
									outline: true,
									color: i === docCounter ? "primary" : "secondary",
									data: {
										counter: i,
									},
									on: {
										click: (event) => {
											const target = event.target as Element;
											callback(getChoose(target));
										},
									},
								},
								`${i}`
							);
						})
					),
				]),
				new h.div(
					{ display: "grid" },
					new b.button(
						{
							weight: "lg",
							on: {
								click: (event) => {
									const target = event.target as Element;
									b.modal.hide(target);
									callback();
								},
							},
						},
						"Close"
					)
				),
			]),
		])
	);
};
