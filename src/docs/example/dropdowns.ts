import { b, h, t } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const genCalendarHeader = () => {
	return new h.div({ display: "flex", justifyContent: "between", paddingBottom: 2 }, [
		new b.button({ color: "transparent" }, new b.icon({ id: "arrow-left" })),
		new h.div(
			{ marginX: "auto" },
			new b.inputgroup.container([
				new b.select([
					new h.option({ value: "1", elem: "January" }),
					new h.option({ value: "2", elem: "February" }),
					new h.option({ value: "3", elem: "Mac" }),
					new h.option({ value: "4", elem: "April" }),
					new h.option({ value: "5", elem: "May" }),
					new h.option({ value: "6", elem: "June" }),
					new h.option({ value: "7", elem: "July" }),
					new h.option({ value: "8", elem: "August" }),
					new h.option({ value: "9", elem: "September" }),
					new h.option({ value: "10", elem: "October" }),
					new h.option({ value: "11", elem: "November" }),
					new h.option({ value: "12", elem: "December" }),
				]),
				new b.select([
					new h.option({ value: "2020", elem: "2020" }),
					new h.option({ value: "2021", elem: "2021" }),
					new h.option({ value: "2022", elem: "2022" }),
					new h.option({ value: "2023", elem: "2023" }),
					new h.option({ value: "2024", elem: "2024" }),
					new h.option({ value: "2025", elem: "2025" }),
				]),
			])
		),
		new b.button({ color: "transparent" }, new b.icon({ id: "arrow-right" })),
	]);
};
const genCalendarItem = (arg?: { view?: Date; startDate?: Date; endDate?: Date; dayTitle?: string[] }) => {
	arg ??= {};

	if (arg.dayTitle && arg.dayTitle.length !== 7) {
		arg.dayTitle = undefined;
	}

	arg.dayTitle ??= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	arg.view ??= new Date();
	// arg.startDate ??= arg.view;
	// arg.endDate ??= arg.startDate ? arg.startDate : arg.view;
	arg.startDate = new Date(arg.view.getFullYear(), arg.view.getMonth(), arg.view.getDate() - 7);
	arg.endDate = new Date(arg.view.getFullYear(), arg.view.getMonth(), arg.view.getDate() + 7);

	if (arg.startDate > arg.endDate) {
		arg.startDate = arg.endDate;
	}

	if (arg.endDate < arg.startDate) {
		arg.endDate = arg.startDate;
	}

	const startDate = arg.startDate;
	const strStartDate = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;
	const startTime = startDate.getTime();

	const endDate = arg.endDate;
	const strEndDate = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`;
	const endTime = endDate.getTime();

	const today = new Date();
	const todayYear = today.getFullYear();
	const todayMonth = today.getMonth();
	const todayDate = today.getDate();
	const strToday = `${todayYear}-${todayMonth}-${todayDate}`;

	arg.view.setDate(1);
	const current = arg.view;
	const currentYear = current.getFullYear();
	const currentMonth = current.getMonth();
	const currentDayCount = new Date(currentYear, currentMonth + 1, 0).getDate();
	const currentFirstDay = current.getDay();
	const currentLastDay = new Date(currentYear, currentMonth + 1, 0).getDay();

	const next = new Date(currentYear, currentMonth + 1, 1);
	const nextYear = next.getFullYear();
	const nextMonth = next.getMonth();

	const prev = new Date(currentYear, currentMonth - 1, 1);
	const prevYear = prev.getFullYear();
	const prevMonth = prev.getMonth();
	const prevDayCount = new Date(currentYear, currentMonth, 0).getDate();

	//7 - 5(Fri) = 2(Tue)
	const nextViewDayCount = 7 - currentLastDay - 1;

	let days: t[] = [];

	//add days
	for (let w = 0; w < arg.dayTitle.length; w++) {
		days.push(new h.li({ class: "day" }, `${arg.dayTitle[w]}`));
	}

	//add prev month date
	for (let x = currentFirstDay; x > 0; x--) {
		let f = prevDayCount - x + 1;
		let d = `${prevYear}-${prevMonth}-${f}`;
		let dDate = new Date(prevYear, prevMonth, f).getTime();

		days.push(
			new h.li(
				{
					class: [
						"prev-month",
						d === strStartDate ? "selected" : undefined,
						d === strEndDate ? "selected" : undefined,
						dDate > startTime && dDate < endTime ? "selected" : undefined,
					],
					data: { value: dDate },
				},
				new h.a({ href: "#" }, `${f}`)
			)
		);
	}

	//add current month date
	for (let y = 1; y <= currentDayCount; y++) {
		let d = `${currentYear}-${currentMonth}-${y}`;
		let dDate = new Date(currentYear, currentMonth, y).getTime();

		days.push(
			new h.li(
				{
					class: [
						d === strToday ? "today" : undefined,
						d === strStartDate ? "selected" : undefined,
						d === strEndDate ? "selected" : undefined,
						dDate > startTime && dDate < endTime ? "selected" : undefined,
					],
					data: { value: dDate },
				},
				new h.a({ href: "#" }, `${y}`)
			)
		);
	}

	//add next month date
	for (let z = 1; z <= nextViewDayCount; z++) {
		let d = `${nextYear}-${nextMonth}-${z}`;
		let dDate = new Date(nextYear, nextMonth, z).getTime();

		days.push(
			new h.li(
				{
					class: [
						"next-month",
						d === strStartDate ? "selected" : undefined,
						d === strEndDate ? "selected" : undefined,
						dDate > startTime && dDate < endTime ? "selected" : undefined,
					],
					data: { value: dDate },
				},
				new h.a({ href: "#" }, `${z}`)
			)
		);
	}

	return new h.ul(
		{
			unstyle: true,
			display: "grid",
			gap: 1,
			textAlign: "center",
			class: "calendar-item",
			style: { "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr 1fr" },
		},
		days
	);
};
const genCalendar = (arg?: { view?: Date; startDate?: Date; endDate?: Date; dayTitle?: string[] }) => {
	return new h.div({ class: "calendar", padding: 2 }, [genCalendarHeader(), genCalendarItem(arg)]);
};

export const dropdowns: IAttrContent = {
	title: "Dropdowns",
	description: "Enhance your dropdowns with filters, icons, custom styles, and more.",
	item: [
		new e.title("Custom style"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
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
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ theme: "light", padding: 1, debug: true, shadow: true, style: { width: "320px" } },
						genCalendar()
					),
					new b.dropdown.menu(
						{ theme: "dark", padding: 1, debug: true, shadow: true, style: { width: "320px" } },
						genCalendar()
					),
				];
			},
		}),
	],
};
