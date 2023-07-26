import { h, b } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";
import { CURRENTVERSION } from "../../ctl/main/_db.js";

export const home: IContent = {
	fullscreen: true,
	fullscreencode: false,
	title: "Home",
	item: () => {
		const jumbotrons = new h.section(
			{
				container: true,
				paddingY: 5,
				textColor: "body-emphasis",
			},
			new h.div({ col: "md-8", marginX: "auto", textAlign: "center" }, [
				new b.icon({
					id: "hexagon-fill",
					marginBottom: 3,
					textColor: "primary-emphasis",
					style: { fontSize: "10rem" },
				}),

				new h.h(
					1,
					{ fontWeight: "bolder", marginBottom: 3 },
					"Build fast, responsive sites with Bootstrap TS"
				),
				new h.p(
					{ lead: true, fontWeight: "medium", marginBottom: 3 },
					"Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."
				),
				new h.div(
					{
						display: "flex",
						flex: "wrap",
						justifyContent: "center",
						gap: 3,
						marginBottom: 3,
					},
					[
						new h.div(
							{ marginX: ["auto", "md-0"] },
							new b.inputgroup.container({ weight: "lg" }, [
								new b.inputgroup.text("$"),
								new b.inputgroup.text(`npm i @printf83/bsts@${CURRENTVERSION}`),
								new b.inputgroup.text(new b.icon("clipboard")),
							])
						),
						new h.div(
							{ marginX: ["auto", "md-0"] },
							new b.button(
								{
									weight: "lg",
									href: "?d=docs/gettingstarted/introduction",
								},
								new b.caption({ icon: "book" }, "Read the docs")
							)
						),
					]
				),
				new h.div([
					"Currently ",
					new h.b(`v${CURRENTVERSION}`),
					" · ",
					new h.a({ href: "#" }, "Download"),
					" · ",
					new h.a({ href: "#" }, "All releases"),
				]),
			])
		);

		const bg = new h.div(
			{
				viewWidth: "100",
				viewHeight: "100",
				theme: "dark",
				style: {
					backgroundImage:
						"linear-gradient(180deg, rgba(var(--bs-body-bg-rgb), 0.01), rgba(var(--bs-body-bg-rgb), 1) 85%),radial-gradient(ellipse at top left, rgba(var(--bs-primary-rgb), 0.5), transparent 50%),radial-gradient(ellipse at top right, rgba(var(--bs-success-rgb), 0.5), transparent 50%),radial-gradient(ellipse at center right, rgba(var(--bs-primary-rgb), 0.5), transparent 50%),radial-gradient(ellipse at center left, rgba(var(--bs-danger-rgb), 0.5), transparent 50%)",
				},
			},
			[jumbotrons]
		);

		return [bg];
	},
};
