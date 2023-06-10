import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

// const genCalendarHeader = (arg: {
// 	view: Date;
// 	monthTitle: string[];
// 	onchange: (sender: Element, view: Date) => void;
// }) => {
// 	return new h.div({ display: "flex", justifyContent: "between", alignItem: "center", paddingBottom: 2 }, [
// 		new b.button(
// 			{
// 				color: "transparent",
// 				on: {
// 					click: (e) => {
// 						const target = e.target as Element;
// 						arg.view.setMonth(arg.view.getMonth() - 1);
// 						arg.onchange(target, arg.view);
// 					},
// 				},
// 			},
// 			new b.icon({ id: "arrow-left" })
// 		),
// 		new h.div(
// 			{ marginX: "auto" },
// 			new b.button(
// 				{
// 					color: "transparent",
// 					fontWeight: "bold",
// 					on: {
// 						click: (e) => {
// 							const target = e.target as Element;
// 							b.modal.show(
// 								b.modal.simple({
// 									on: {
// 										"show.bs.modal": (e) => {
// 											const mdl = e.target as Element;
// 											(mdl.querySelector("select[name='month']") as HTMLSelectElement).value =
// 												arg.view.getMonth().toString();
// 											(mdl.querySelector("input[name='year']") as HTMLInputElement).value =
// 												arg.view.getFullYear().toString();
// 										},
// 									},
// 									title: "Calendar",
// 									elem: new b.inputgroup.container([
// 										new b.select(
// 											{
// 												name: "month",
// 											},
// 											arg.monthTitle.map((i, ix) => {
// 												return new h.option({ value: ix.toString(), elem: i });
// 											})
// 										),
// 										new b.input({ name: "year", type: "number", min: 0, max: 9999 }),
// 									]),
// 									btn: ["ok", "cancel"],
// 									btnFn: (e) => {
// 										const mdl = (e.target as Element).closest(".modal") as Element;
// 										const mdlMonth = parseInt(
// 											(mdl.querySelector("select[name='month']") as HTMLSelectElement).value
// 										);
// 										const mdlYear = parseInt(
// 											(mdl.querySelector("input[name='year']") as HTMLInputElement).value
// 										);

// 										arg.view.setMonth(mdlMonth);
// 										arg.view.setFullYear(mdlYear);
// 										arg.onchange(target, arg.view);

// 										b.modal.hide(mdl);
// 									},
// 								})
// 							);
// 						},
// 					},
// 				},
// 				`${arg.monthTitle[arg.view.getMonth()]} ${arg.view.getFullYear()}`
// 			)
// 		),
// 		new b.button(
// 			{
// 				color: "transparent",
// 				on: {
// 					click: (e) => {
// 						const target = e.target as Element;
// 						arg.view.setMonth(arg.view.getMonth() + 1);
// 						arg.onchange(target, arg.view);
// 					},
// 				},
// 			},
// 			new b.icon({ id: "arrow-right" })
// 		),
// 	]);
// };

// const genCalendarItem = (arg: {
// 	multiple?: boolean;
// 	view: Date;
// 	startDate?: Date;
// 	endDate?: Date;
// 	dayTitle: string[];
// 	onchange: (sender: Element, arg: { startDate?: Date; endDate?: Date }) => void;
// }) => {
// 	if (arg.multiple && arg.startDate && arg.endDate) {
// 		if (arg.startDate > arg.endDate) {
// 			arg.startDate = arg.endDate;
// 		}

// 		if (arg.endDate < arg.startDate) {
// 			arg.endDate = arg.startDate;
// 		}
// 	} else if (!arg.multiple) {
// 		arg.endDate = arg.startDate;
// 	}

// 	const startDate = arg.startDate ? arg.startDate : undefined;
// 	const strStartDate = startDate
// 		? `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
// 		: undefined;
// 	const startTime = startDate ? startDate.getTime() : undefined;

// 	const endDate = arg.endDate ? arg.endDate : undefined;
// 	const strEndDate = endDate ? `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}` : undefined;
// 	const endTime = endDate ? endDate.getTime() : undefined;

// 	const today = new Date();
// 	const todayYear = today.getFullYear();
// 	const todayMonth = today.getMonth();
// 	const todayDate = today.getDate();
// 	const strToday = `${todayYear}-${todayMonth}-${todayDate}`;

// 	arg.view.setDate(1);
// 	const current = arg.view;
// 	const currentYear = current.getFullYear();
// 	const currentMonth = current.getMonth();
// 	const currentDayCount = new Date(currentYear, currentMonth + 1, 0).getDate();
// 	const currentFirstDay = current.getDay();
// 	const currentLastDay = new Date(currentYear, currentMonth + 1, 0).getDay();

// 	const next = new Date(currentYear, currentMonth + 1, 1);
// 	const nextYear = next.getFullYear();
// 	const nextMonth = next.getMonth();

// 	const prev = new Date(currentYear, currentMonth - 1, 1);
// 	const prevYear = prev.getFullYear();
// 	const prevMonth = prev.getMonth();
// 	const prevDayCount = new Date(currentYear, currentMonth, 0).getDate();

// 	//7 - 5(Fri) = 2(Tue)
// 	const nextViewDayCount = 7 - currentLastDay - 1;

// 	let days: t[] = [];

// 	//add days
// 	for (let w = 0; w < arg.dayTitle.length; w++) {
// 		days.push(new h.li({ class: "day" }, `${arg.dayTitle[w]}`));
// 	}

// 	//add prev month date
// 	for (let x = currentFirstDay; x > 0; x--) {
// 		let f = prevDayCount - x + 1;
// 		let d = `${prevYear}-${prevMonth}-${f}`;
// 		let dDate = new Date(prevYear, prevMonth, f).getTime();

// 		days.push(
// 			new h.li(
// 				{
// 					class: [
// 						strStartDate && d === strStartDate ? "selected" : undefined,
// 						strEndDate && d === strEndDate ? "selected" : undefined,
// 						startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
// 					],
// 				},
// 				`${f}`
// 			)
// 		);
// 	}

// 	//add current month date
// 	for (let y = 1; y <= currentDayCount; y++) {
// 		let d = `${currentYear}-${currentMonth}-${y}`;
// 		let dDate = new Date(currentYear, currentMonth, y).getTime();

// 		days.push(
// 			new h.li(
// 				{
// 					class: [
// 						"current-month",
// 						d === strToday ? "today" : undefined,
// 						strStartDate && d === strStartDate ? "selected" : undefined,
// 						strEndDate && d === strEndDate ? "selected" : undefined,
// 						startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
// 					],
// 					data: { value: dDate },
// 					on: {
// 						click: (e) => {
// 							const target = e.target as Element;
// 							const dataValue = target.closest("li")?.getAttribute("data-value");
// 							if (dataValue) {
// 								const value = parseInt(dataValue);

// 								if (arg.multiple) {
// 									if (arg.startDate && arg.endDate) {
// 										arg.startDate = new Date(value);
// 										arg.endDate = undefined;
// 									} else if (arg.startDate && !arg.endDate) {
// 										const sValue = arg.startDate.getTime();

// 										if (sValue > value) {
// 											arg.startDate = new Date(value);
// 											arg.endDate = new Date(sValue);
// 										} else {
// 											arg.endDate = new Date(value);
// 										}
// 									}
// 								} else {
// 									arg.startDate = new Date(value);
// 								}

// 								arg.onchange(target, {
// 									startDate: arg.startDate,
// 									endDate: arg.endDate,
// 								});
// 							}
// 						},
// 					},
// 				},
// 				new h.a({ href: "#" }, `${y}`)
// 			)
// 		);
// 	}

// 	//add next month date
// 	for (let z = 1; z <= nextViewDayCount; z++) {
// 		let d = `${nextYear}-${nextMonth}-${z}`;
// 		let dDate = new Date(nextYear, nextMonth, z).getTime();

// 		days.push(
// 			new h.li(
// 				{
// 					class: [
// 						strStartDate && d === strStartDate ? "selected" : undefined,
// 						strEndDate && d === strEndDate ? "selected" : undefined,
// 						startTime && endTime && dDate > startTime && dDate < endTime ? "selected" : undefined,
// 					],
// 				},
// 				`${z}`
// 			)
// 		);
// 	}

// 	return new h.ul(
// 		{
// 			unstyle: true,
// 			display: "grid",
// 			gap: 1,
// 			textAlign: "center",
// 			class: "calendar-item",
// 			style: { "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr 1fr" },
// 		},
// 		days
// 	);
// };

// const genCalendar = (arg?: {
// 	multiple?: boolean;
// 	view?: Date;
// 	startDate?: Date;
// 	endDate?: Date;
// 	dayTitle?: string[];
// 	monthTitle?: string[];
// 	onchange?: (sender: Element, arg: { startDate?: Date; endDate?: Date }) => void;
// }) => {
// 	arg ??= {};

// 	arg.multiple ??= false;
// 	arg.view ??= new Date();

// 	if (arg.monthTitle && arg.monthTitle.length !== 12) {
// 		arg.monthTitle = undefined;
// 	}

// 	arg.monthTitle ??= [
// 		"January",
// 		"February",
// 		"March",
// 		"April",
// 		"May",
// 		"June",
// 		"July",
// 		"August",
// 		"September",
// 		"October",
// 		"November",
// 		"December",
// 	];

// 	if (arg.dayTitle && arg.dayTitle.length !== 7) {
// 		arg.dayTitle = undefined;
// 	}

// 	arg.dayTitle ??= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// 	return new h.div({ class: "calendar", padding: 2 }, [
// 		genCalendarHeader({
// 			view: arg.view,
// 			monthTitle: arg.monthTitle,
// 			onchange: (sender, view) => {
// 				let calendarContainer = sender.closest(".calendar");
// 				if (calendarContainer) {
// 					core.replaceWith(
// 						calendarContainer,
// 						genCalendar({
// 							multiple: arg?.multiple,
// 							dayTitle: arg?.dayTitle,
// 							monthTitle: arg?.monthTitle,
// 							startDate: arg?.startDate,
// 							endDate: arg?.endDate,
// 							view: view,
// 							onchange: arg?.onchange,
// 						})
// 					);
// 				}
// 			},
// 		}),
// 		genCalendarItem({
// 			multiple: arg?.multiple,
// 			startDate: arg?.startDate,
// 			endDate: arg?.endDate,
// 			view: arg.view,
// 			dayTitle: arg.dayTitle,
// 			onchange: (sender, detail) => {
// 				let calendarContainer = sender.closest(".calendar");
// 				if (calendarContainer) {
// 					core.replaceWith(
// 						calendarContainer,
// 						genCalendar({
// 							multiple: arg?.multiple,
// 							dayTitle: arg?.dayTitle,
// 							monthTitle: arg?.monthTitle,
// 							startDate: detail?.startDate,
// 							endDate: detail?.endDate,
// 							view: arg?.view,
// 							onchange: arg?.onchange,
// 						})
// 					);
// 				}
// 			},
// 		}),
// 	]);
// };

export const dropdowns: IAttrContent = {
	title: "Dropdowns",
	description: "Enhance your dropdowns with filters, icons, custom styles, and more.",
	item: [
		new e.title("Custom style"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ customStyle: 1, theme: "light", debug: true, shadow: true, style: { width: "220px" } },
						[
							new b.dropdown.item({ href: "#", active: true }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]
					),
					new b.dropdown.menu(
						{ customStyle: 1, theme: "dark", debug: true, shadow: true, style: { width: "220px" } },
						[
							new b.dropdown.item({ href: "#", active: true }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]
					),
				];
			},
		}),

		new e.text("Live preview"),

		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle("Light dropdown"),
						new b.dropdown.menu({ customStyle: 1, theme: "light" }, [
							new b.dropdown.item({ href: "#", active: true }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle("Dark dropdown"),
						new b.dropdown.menu({ customStyle: 1, theme: "dark" }, [
							new b.dropdown.item({ href: "#", active: true }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.title("Filter"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ theme: "light", paddingTop: 0, debug: true, shadow: true, style: { width: "280px" } },
						[
							new h.form(
								{
									padding: 2,
									marginBottom: 2,
									bgColor: "body-tertiary",
									border: "bottom",
									rounded: "top",
								},
								new b.input({ type: "search", autocomplete: "off", placeholder: "Type to filter..." })
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption({ icon: new b.icon({ id: "record-fill", color: "success" }) }, "Action")
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "primary" }) },
									"Another action"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "danger" }) },
									"Something else here"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "info" }) },
									"Separated link"
								)
							),
						]
					),
					new b.dropdown.menu(
						{ theme: "dark", paddingTop: 0, debug: true, shadow: true, style: { width: "280px" } },
						[
							new h.form(
								{
									padding: 2,
									marginBottom: 2,
									bgColor: "body-tertiary",
									border: "bottom",
									rounded: "top",
								},
								new b.input({ type: "search", autocomplete: "off", placeholder: "Type to filter..." })
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption({ icon: new b.icon({ id: "record-fill", color: "success" }) }, "Action")
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "primary" }) },
									"Another action"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "danger" }) },
									"Something else here"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "info" }) },
									"Separated link"
								)
							),
						]
					),
				];
			},
		}),
		new e.text("Live preview"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle("Light dropdown"),
						new b.dropdown.menu({ theme: "light", paddingTop: 0 }, [
							new h.form(
								{
									padding: 2,
									marginBottom: 2,
									bgColor: "body-tertiary",
									border: "bottom",
									rounded: "top",
								},
								new b.input({
									type: "search",
									autocomplete: "off",
									placeholder: "Type to filter...",
								})
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption({ icon: new b.icon({ id: "record-fill", color: "success" }) }, "Action")
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "primary" }) },
									"Another action"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "danger" }) },
									"Something else here"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "info" }) },
									"Separated link"
								)
							),
						]),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle("Dark dropdown"),
						new b.dropdown.menu({ theme: "dark", paddingTop: 0 }, [
							new h.form(
								{
									padding: 2,
									marginBottom: 2,
									bgColor: "body-tertiary",
									border: "bottom",
									rounded: "top",
								},
								new b.input({
									type: "search",
									autocomplete: "off",
									placeholder: "Type to filter...",
								})
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption({ icon: new b.icon({ id: "record-fill", color: "success" }) }, "Action")
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "primary" }) },
									"Another action"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "danger" }) },
									"Something else here"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "info" }) },
									"Separated link"
								)
							),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.title("Menu"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu({ theme: "light", debug: true, shadow: true, style: { width: "220px" } }, [
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#", color: "danger" }, new b.caption({ icon: "trash" }, "Trash")),
					]),
					new b.dropdown.menu({ theme: "dark", debug: true, shadow: true, style: { width: "220px" } }, [
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "trash" }, "Trash")),
					]),
				];
			},
		}),
		new e.text("Live preview"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle("Light dropdown"),
						new b.dropdown.menu({ theme: "light" }, [
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
							new b.dropdown.divider(),
							new b.dropdown.item(
								{ href: "#", color: "danger" },
								new b.caption({ icon: "trash" }, "Trash")
							),
						]),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle("Dark dropdown"),
						new b.dropdown.menu({ theme: "dark" }, [
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "trash" }, "Trash")),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.title("Calendar"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ theme: "light", debug: true, shadow: true, style: { width: "320px" } },
						new b.calendar({ paddingX: 2, view: new Date(), startDate: new Date() })
					),
					new b.dropdown.menu(
						{ theme: "dark", debug: true, shadow: true, style: { width: "320px" } },
						new b.calendar({ paddingX: 2, view: new Date(), startDate: new Date() })
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Multiple"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ theme: "light", debug: true, shadow: true, style: { width: "320px" } },
						new b.calendar({
							paddingX: 2,
							multiple: true,
							view: new Date(),
							startDate: new Date(
								new Date().getFullYear(),
								new Date().getMonth(),
								new Date().getDate() + 17
							),
							endDate: new Date(
								new Date().getFullYear(),
								new Date().getMonth(),
								new Date().getDate() + 35
							),
						})
					),
					new b.dropdown.menu(
						{ theme: "dark", debug: true, shadow: true, style: { width: "320px" } },
						new b.calendar({
							paddingX: 2,
							multiple: true,
							view: new Date(),
							startDate: new Date(
								new Date().getFullYear(),
								new Date().getMonth(),
								new Date().getDate() + 17
							),
							endDate: new Date(
								new Date().getFullYear(),
								new Date().getMonth(),
								new Date().getDate() + 35
							),
						})
					),
				];
			},
		}),

		new e.xsubtitle("Live preview"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle({ autoClose: "outside" }, "Light dropdown"),
						new b.dropdown.menu(
							{
								theme: "light",
								style: { minWidth: "320px" },
							},
							new b.calendar({ paddingX: 2, view: new Date(), startDate: new Date() })
						),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle({ autoClose: "outside" }, "Dark dropdown"),
						new b.dropdown.menu(
							{ theme: "dark", style: { minWidth: "320px" } },
							new b.calendar({ paddingX: 2, view: new Date(), startDate: new Date() })
						),
					]),
				];
			},
		}),

		new e.text("Multiple"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle({ autoClose: "outside" }, "Light dropdown"),
						new b.dropdown.menu(
							{
								theme: "light",
								style: { minWidth: "320px" },
							},
							new b.calendar({
								paddingX: 2,
								multiple: true,
								view: new Date(),
								startDate: new Date(
									new Date().getFullYear(),
									new Date().getMonth(),
									new Date().getDate() + 17
								),
								endDate: new Date(
									new Date().getFullYear(),
									new Date().getMonth(),
									new Date().getDate() + 35
								),
							})
						),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle({ autoClose: "outside" }, "Dark dropdown"),
						new b.dropdown.menu(
							{
								theme: "dark",
								style: { minWidth: "320px" },
							},
							new b.calendar({
								paddingX: 2,
								multiple: true,
								view: new Date(),
								startDate: new Date(
									new Date().getFullYear(),
									new Date().getMonth(),
									new Date().getDate() + 17
								),
								endDate: new Date(
									new Date().getFullYear(),
									new Date().getMonth(),
									new Date().getDate() + 35
								),
							})
						),
					]),
				];
			},
		}),
	],
};
