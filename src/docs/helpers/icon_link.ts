import { b, h, s } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const icon_link: IContent = {
	title: "Icon link",
	description: "Quickly create stylized hyperlinks with Bootstrap Icons or other icons.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.text(
					"The icon link helper component modifies Bootstrap default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default {{gap}} value. Bootstrap stylize the underline with a custom offset and color. Icons are automatically sized to {{1em}} to best match their associated text’s {{font-size}}."
				),
				new e.text(
					"Icon links assume {{https://icons.getbootstrap.com/::Bootstrap Icons}} are being used, but you can use any icon or image you like."
				),
				new e.alert(
					{ color: "info", callout: true },
					"When icons are purely decorative, they should be hidden from assistive technologies using {{aria-hidden='true'}}, as Bootstrap done in Bootstrap examples. For icons that convey meaning, provide an appropriate text alternative by adding {{role='img'}} and an appropriate {{aria-label='...'}} to the SVGs."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Example"),
				new e.text(
					"Take a regular {{<a>}} element, add {{.icon-link}}, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a({ href: "#", iconLink: true }, [
							new s(
								'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/></svg>'
							),
							"Icon link",
						]);
					},
				}),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a({ href: "#", iconLink: true }, [
							"Icon link",
							new s(
								'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>'
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Style on hover"),
				new e.text("Add {{.icon-link-hover}} to move the icon to the right on hover."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a({ href: "#", iconLink: "hover" }, [
							"Icon link",
							new s(
								'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>'
							),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Customize"),
				new e.text(
					"Modify the styling of an icon link with Bootstrap link CSS variables, Sass variables, utilities, or custom styles."
				),
			]),

			//----------------------

			new e.section([
				new e.subtitle("CSS variables"),
				new e.text(
					"Modify the {{--bs-link-*}} and {{--bs-icon-link-*}} CSS variables as needed to change the default appearance."
				),
				new e.text(
					"Customize the hover {{transform}} by overriding the {{--bs-icon-link-transform}} CSS variable:"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a(
							{
								href: "#",
								iconLink: "hover",
								style: {
									"--bs-icon-link-transform": "translate3d(0, -.125rem, 0)",
								},
							},
							[
								new s(
									'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>'
								),
								"Icon link",
							]
						);
					},
				}),
				new e.text("Customize the color by overriding the {{--bs-link-*}} CSS variable:"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a(
							{
								href: "#",
								iconLink: "hover",
								style: {
									"--bs-link-hover-color-rgb": "25, 135, 84",
								},
							},
							[
								"Icon link",
								new s(
									'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>'
								),
							]
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Sass"),
				new e.text(
					"Customize the icon link Sass variables to modify all icon link styles across your Bootstrap-powered project."
				),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$icon-link-gap:               .375rem;
						$icon-link-underline-offset:  .25em;
						$icon-link-icon-size:         1em;
						$icon-link-icon-transition:   .2s ease-in-out transform;
						$icon-link-icon-transform:    translate3d(.25em, 0, 0);
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Utilities"),
				new e.text(
					"Modify icon links with any of {{nav:docs/utilities/link::Bootstrap link utilities}} for modifying underline color and offset."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a(
							{
								href: "#",
								linkColor: "success",
								linkUnderlineColor: "success",
								linkUnderlineOpacity: 25,
								iconLink: "hover",
								style: {
									"--bs-link-hover-color-rgb": "25, 135, 84",
								},
							},
							[
								"Icon link",
								new s(
									'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>'
								),
							]
						);
					},
				}),
				new e.text("On {{<span>}} so you can use this everywhere"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.button(
							new h.span(
								{
									iconLink: "hover",
								},
								[
									"Icon link",
									new s(
										'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>'
									),
								]
							)
						);
					},
				}),
			]),
		];
	},
};
