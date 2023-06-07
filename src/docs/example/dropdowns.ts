import { b, h, t } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const genCalendar = (arg?: { date?: Date; dayTitle?: string[]; dayStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 }) => {
	arg ??= {};

	if (arg.dayTitle && arg.dayTitle.length !== 7) {
		arg.dayTitle = undefined;
	}

	arg.date ??= new Date();
	arg.dayTitle ??= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	arg.dayStart ??= 1;

	// let today = arg.date;

	arg.date.setDate(1);

	const currentMonthData = new Date(arg.date.getFullYear(), arg.date.getMonth(), 1);
	const nextMonthData = new Date(arg.date.getFullYear(), arg.date.getMonth() + 1, 1);
	const prevMonthData = new Date(arg.date.getFullYear(), arg.date.getMonth() - 1, 1);

	const currentMonth = {
		year: currentMonthData.getFullYear(),
		month: currentMonthData.getMonth(),
	};

	const nextMonth = {
		year: nextMonthData.getFullYear(),
		month: nextMonthData.getMonth(),
	};

	const prevMonth = {
		year: prevMonthData.getFullYear(),
		month: prevMonthData.getMonth(),
	};

	const currentMonthDayCount = new Date(arg.date.getFullYear(), arg.date.getMonth() + 1, 0).getDate();

	const prevMonthDayCount = new Date(arg.date.getFullYear(), arg.date.getMonth(), 0).getDate();

	const currentMonthFirstDay = arg.date.getDay();
	const currentMonthLastDay = new Date(arg.date.getFullYear(), arg.date.getMonth() + 1, 0).getDay();

	//7 - 5(Fri) = 2(Tue)
	const nextMonthViewDayCount = 7 - currentMonthLastDay - 1;

	let days: t[] = [];

	//add days
	for (let w = 0; w < arg.dayTitle.length; w++) {
		days.push(new h.li({ class: "day" }, `${arg.dayTitle[w]}`));
	}

	//add prev month date
	for (let x = currentMonthFirstDay; x > 0; x--) {
		let d = prevMonthDayCount - x + 1;
		days.push(
			new h.li(
				{
					class: "prev-month",
					data: { value: `${prevMonth.year}-${prevMonth.month}-${d}` },
				},
				new h.a({ href: "#" }, `${d}`)
			)
		);
	}

	//add current month date
	for (let y = 1; y <= currentMonthDayCount; y++) {
		if (y === new Date().getDate() && arg.date.getMonth() === new Date().getMonth()) {
			days.push(
				new h.li(
					{
						class: "today",
						data: { value: `${currentMonth.year}-${currentMonth.month}-${y}` },
					},
					new h.a({ href: "a" }, `${y}`)
				)
			);
		} else {
			days.push(
				new h.li(
					{ data: { value: `${currentMonth.year}-${currentMonth.month}-${y}` } },
					new h.a({ href: "#" }, `${y}`)
				)
			);
		}
	}

	//add next month date
	for (let z = 1; z <= nextMonthViewDayCount; z++) {
		days.push(
			new h.li(
				{
					class: "next-month",
					data: { value: `${nextMonth.year}-${nextMonth.month}-${z}` },
				},
				new h.a({ href: "#" }, `${z}`)
			)
		);
	}

	return days;
};

export const dropdowns: IAttrContent = {
	title: "Dropdowns",
	description: "Enhance your dropdowns with filters, icons, custom styles, and more.",
	item: [
		new e.title("Custom style"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				gap: 3,
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
				gap: 1,
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
				gap: 3,
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
				gap: 1,
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
				gap: 3,
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
				gap: 1,
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
			outputAttr: {
				gap: 1,
			},
			output: () => {
				return [
					new h.div({ display: "flex", justifyContent: "between" }, [
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
					]),
					new h.ul(
						{
							unstyle: true,
							display: "grid",
							gap: 1,
							textAlign: "center",
							style: { "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr 1fr" },
						},
						genCalendar()
					),
				];
			},
		}),
	],
};
