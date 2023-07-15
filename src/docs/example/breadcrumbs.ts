import { b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const breadcrumbs: IContent = {
	title: "Breadcrumbs",
	description: "Integrate custom icons and create stepper components.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Rounded padding"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.breadcrumb.container(
							{
								label: "breadcrumb",
								bgColor: "body-tertiary",
								rounded: 3,
								padding: 3,
							},
							[
								new b.breadcrumb.item({ href: "#" }, "Home"),
								new b.breadcrumb.item({ href: "#" }, "Library"),
								new b.breadcrumb.item({ active: true, href: "#" }, "Data"),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("With icon"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.breadcrumb.container(
							{
								label: "breadcrumb",
								bgColor: "body-tertiary",
								rounded: 3,
								padding: 3,
							},
							[
								new b.breadcrumb.item(
									{
										textDecoration: "none",
										fontWeight: "semibold",
										linkColor: "body-emphasis",
										href: "#",
									},
									new b.icon("house-fill")
								),
								new b.breadcrumb.item(
									{
										textDecoration: "none",
										fontWeight: "semibold",
										linkColor: "body-emphasis",
										href: "#",
									},
									"Library"
								),
								new b.breadcrumb.item({ active: true, href: "#" }, "Data"),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Custom divider"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.breadcrumb.container(
							{
								label: "breadcrumb",
								bgColor: "body-tertiary",
								rounded: 3,
								padding: 3,
								divider: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236c757d'%3E%3Cpath fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
							},
							[
								new b.breadcrumb.item(
									{
										textDecoration: "none",
										fontWeight: "semibold",
										linkColor: "body-emphasis",
										href: "#",
									},
									new b.icon("house-fill")
								),
								new b.breadcrumb.item(
									{
										textDecoration: "none",
										fontWeight: "semibold",
										linkColor: "body-emphasis",
										href: "#",
									},
									"Library"
								),
								new b.breadcrumb.item({ active: true, href: "#" }, "Data"),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Flex"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.breadcrumb.container(
							{
								label: "breadcrumb",
								bgColor: "body-tertiary",
								rounded: 3,
								border: true,
								display: "grid",
								gridTemplateColumns: "1fr 1fr 1fr",
								textAlign: "center",
								padding: 3,
								divider: "''",
							},
							[
								new b.breadcrumb.item(
									{
										textDecoration: "none",
										fontWeight: "semibold",
										linkColor: "body-emphasis",
										href: "#",
									},
									new b.caption({ icon: "house-fill" }, "Home")
								),
								new b.breadcrumb.item(
									{
										textDecoration: "none",
										fontWeight: "semibold",
										linkColor: "body-emphasis",
										href: "#",
									},
									"Library"
								),
								new b.breadcrumb.item({ active: true, href: "#" }, "Data"),
							]
						);
					},
				}),
			]),

			//----------------------
		];
	},
	db: [
		{
			source: `() => {
return new b.breadcrumb.container({
label: "breadcrumb",
bgColor: "body-tertiary",
rounded: 3,
padding: 3,
}, [
new b.breadcrumb.item({ href: "#" }, "Home"),
new b.breadcrumb.item({ href: "#" }, "Library"),
new b.breadcrumb.item({ active: true, href: "#" }, "Data"),
]);
}`,
		},
		{
			source: `() => {
return new b.breadcrumb.container({
label: "breadcrumb",
bgColor: "body-tertiary",
rounded: 3,
padding: 3,
}, [
new b.breadcrumb.item({
textDecoration: "none",
fontWeight: "semibold",
linkColor: "body-emphasis",
href: "#",
}, new b.icon("house-fill")),
new b.breadcrumb.item({
textDecoration: "none",
fontWeight: "semibold",
linkColor: "body-emphasis",
href: "#",
}, "Library"),
new b.breadcrumb.item({ active: true, href: "#" }, "Data"),
]);
}`,
		},
		{
			source: `() => {
return new b.breadcrumb.container({
label: "breadcrumb",
bgColor: "body-tertiary",
rounded: 3,
padding: 3,
divider: \`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236c757d'%3E%3Cpath fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")\`,
}, [
new b.breadcrumb.item({
textDecoration: "none",
fontWeight: "semibold",
linkColor: "body-emphasis",
href: "#",
}, new b.icon("house-fill")),
new b.breadcrumb.item({
textDecoration: "none",
fontWeight: "semibold",
linkColor: "body-emphasis",
href: "#",
}, "Library"),
new b.breadcrumb.item({ active: true, href: "#" }, "Data"),
]);
}`,
		},
		{
			source: `() => {
return new b.breadcrumb.container({
label: "breadcrumb",
bgColor: "body-tertiary",
rounded: 3,
border: true,
display: "grid",
gridTemplateColumns: "1fr 1fr 1fr",
textAlign: "center",
padding: 3,
divider: "''",
}, [
new b.breadcrumb.item({
textDecoration: "none",
fontWeight: "semibold",
linkColor: "body-emphasis",
href: "#",
}, new b.caption({ icon: "house-fill" }, "Home")),
new b.breadcrumb.item({
textDecoration: "none",
fontWeight: "semibold",
linkColor: "body-emphasis",
href: "#",
}, "Library"),
new b.breadcrumb.item({ active: true, href: "#" }, "Data"),
]);
}`,
		},
	],
};
