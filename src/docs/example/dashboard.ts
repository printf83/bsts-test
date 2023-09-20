import { b, core, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";
import { Chart } from "chart.js";

export const dashboard: IContent = {
	fullscreen: true,
	title: "Dashboard",
	item: () => {
		const header = new b.navbar.container(
			{
				theme: "dark",
				bgColor: "dark",
				fixed: "top",
				expand: "md",
				sticky: "top",
				padding: 0,
				flex: "md-nowrap",
				shadow: true,
			},
			new b.navbar.innercontainer({ container: "fluid" }, [
				new b.navbar.brand({ href: "#" }, "Company name"),
				new b.navbar.toggle.offcanvas({
					target: "#offcanvasNavbar",
					controlfor: "offcanvasNavbar",
					label: "Toggle navigation",
				}),
			])
		);

		const sidebar_item = (opt: { href: string; icon: string; label: string }) => {
			return new b.navbar.item(
				new b.navbar.link(
					{
						href: opt.href,
						paddingX: 3,
						textColorHover: "light",
						bgColorHover: "primary",
					},
					new b.caption({ icon: new b.icon(opt.icon) }, opt.label)
				)
			);
		};

		const sidebar_heading = new h.h(
			6,
			{
				display: "flex",
				justifyContent: "between",
				alignItem: "center",
				paddingX: 3,
				marginTop: 4,
				marginBottom: 1,
				textColor: "body-secondary",
				textTransform: "uppercase",
			},
			[
				new h.span("Saved reports"),
				new h.a(
					{
						textColor: "secondary",
						textColorHover: "primary",
						href: "#",
						label: "Add a new report",
					},
					new b.icon("plus-circle")
				),
			]
		);

		const sidebar = new h.div(
			{ border: "end", col: ["md-3", "lg-2"], padding: 0, bgColor: "body-tertiary" },
			new b.offcanvas.container(
				{
					id: "offcanvasNavbar",
					placement: "end",
					show: "md",
					bgColor: "body-tertiary",
					labelledby: "offcanvasNavbarLabel",
				},
				[
					new b.offcanvas.header([
						new b.offcanvas.title({ id: "offcanvasNavbarLabel" }, "Company name"),
						new b.offcanvas.btnclose({ target: "#offcanvasNavbar" }),
					]),
					new b.offcanvas.body(
						{
							display: "md-flex",
							flex: "column",
							paddingTop: "lg-3",
							overflowY: "auto",
						},
						[
							new b.navbar.itemcontainer(
								{
									flex: "column",
									marginBottom: "auto",
								},
								[
									...[
										{ icon: "house", label: "Dashboard", href: "#" },
										{ icon: "file-earmark", label: "Orders", href: "#" },
										{ icon: "cart", label: "Products", href: "#" },
										{ icon: "people", label: "Customers", href: "#" },
										{ icon: "graph-up", label: "Report", href: "#" },
										{ icon: "puzzle", label: "Integrations", href: "#" },
									].map((i) => sidebar_item(i)),
									sidebar_heading,
									...[
										{
											icon: "file-earmark-text",
											label: "Current month",
											href: "#",
										},
										{
											icon: "file-earmark-text",
											label: "Last quarter",
											href: "#",
										},
										{
											icon: "file-earmark-text",
											label: "Social engagement",
											href: "#",
										},
										{
											icon: "file-earmark-text",
											label: "Year-end sale",
											href: "#",
										},
									].map((i) => sidebar_item(i)),
									new h.hr({ marginY: 3 }),
									...[
										{
											icon: "gear-wide-connected",
											label: "Settings",
											href: "#",
										},
										{
											icon: "door-closed",
											label: "Sign out",
											href: "#",
										},
									].map((i) => sidebar_item(i)),
								]
							),
						]
					),
				]
			)
		);

		const page_title = new h.div(
			{
				display: "flex",
				justifyContent: "between",
				flex: ["wrap", "md-nowrap"],
				alignItem: "center",
				paddingTop: 3,
				paddingBottom: 2,
				marginBottom: 3,
				border: "bottom",
			},
			[
				new h.h(1, { h: 2 }, "Dashboard"),
				new b.btngroup({ role: "toolbar", marginBottom: [2, "md-0"] }, [
					new b.btngroup({ marginEnd: 2 }, [
						new b.button({ weight: "sm", outline: true, color: "secondary" }, "Share"),
						new b.button({ weight: "sm", outline: true, color: "secondary" }, "Export"),
					]),
					new b.dropdown.container([
						new b.dropdown.button(
							{
								weight: "sm",
								outline: true,
								color: "secondary",
								display: "flex",
								alignItem: "center",
								gap: 1,
							},
							new b.caption({ icon: "calendar3" }, "This week")
						),
					]),
				]),
			]
		);

		const chart_id = core.UUID();
		const fillColor = core.getCSSVarRgbColor("--bs-primary-bg-subtle", 0.5);
		const lineColor = core.getCSSVarRgbColor("--bs-primary");
		const gridColor = core.getCSSVarRgbColor("--bs-tertiary-bg");
		let last_value = core.rndBetween(100, 1000);

		const chart_data = Array(26)
			.fill("")
			.map(() => {
				let current_value = 0;
				if (core.rndBetween(0, 100) > 50)
					current_value = last_value + core.rndBetween(1000, 3000);
				else current_value = last_value - core.rndBetween(100, 1000);
				last_value = current_value;
				return current_value;
			});
		const main_chart = new h.canvas({
			marginY: 5,
			id: chart_id,
			on: {
				build: (event) => {
					const target = event.target as HTMLCanvasElement;
					new Chart(target, {
						type: "line",
						data: {
							labels: Array(chart_data.length)
								.fill("")
								.map((_i, ix) => String.fromCharCode(64 + ix + 1)),
							datasets: [
								{
									data: chart_data,
									borderWidth: 2,
									pointRadius: 2,
									tension: 0.5,
									borderColor: lineColor,
									fill: {
										target: "origin",
										above: fillColor,
									},
								},
							],
						},
						options: {
							plugins: {
								legend: {
									display: false,
								},
							},
							scales: {
								x: {
									grid: {
										color: gridColor,
									},
								},
								y: {
									beginAtZero: true,
									grid: {
										color: gridColor,
									},
								},
							},
						},
					});
				},
			},
		});

		const main_section = new h.h(2, "Section title");

		const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum ante eu est semper, et vulputate leo molestie. Cras luctus pretium arcu, quis rutrum lectus dictum vel. In quis pretium erat. Proin vel placerat velit. Vestibulum vehicula ex sed ultricies ultricies. In vitae erat est. Pellentesque id aliquet justo. Maecenas at mauris in sapien interdum posuere at in velit. In hac habitasse platea dictumst.`;

		const arr_1D = lorem.replace(/[\.|\,]/g, "").split(" ");
		const num_col = 4;
		const num_row = Math.ceil(arr_1D.length / num_col);
		const arr_2D: string[][] = [];

		for (let i = 0; i < num_row; i++) {
			const row: string[] = [];
			row.push((i + 1000).toLocaleString());
			for (let j = 0; j < num_col; j++) {
				const index = i * num_col + j;
				if (index < arr_1D.length) {
					row.push(arr_1D[index]!);
				} else {
					row.push("");
				}
			}
			arr_2D.push(row);
		}

		const main_table = new b.table.container({
			striped: "row",
			item: [["#", "Header", "Header", "Header", "Header"], ...arr_2D],
		});

		const main = new h.main(
			{ col: ["md-9", "lg-10"], marginStart: "sm-auto", paddingX: "md-4" },
			[page_title, main_chart, main_section, main_table]
		);

		const middle = new h.div({ container: "fluid" }, new h.div({ row: true }, [sidebar, main]));

		return [header, middle];
	},
};
