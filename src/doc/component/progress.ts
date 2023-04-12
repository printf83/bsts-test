import { b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const progress: IAttrContent = {
	title: "Progress",
	description:
		"Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.",
	item: [
		new e.alert(
			{ color: "info", callout: true },
			"{{b::New markup in v5.3.0 —}} We’ve deprecated the previous HTML structure for progress bars and replaced it with a more accessible one. The previous structure will continue to work until v6. {{https://getbootstrap.com/docs/5.3/migration/#improved-markup-for-progress-bars::See what’s changed in Bootstrap migration guide}}."
		),

		new e.title("How it works"),
		new e.text(
			"Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use the {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress::HTML5 <progress> element}}, ensuring you can stack progress bars, animate them, and place text labels over them."
		),
		new e.ul({
			item: [
				"We use the {{.progress}} as a wrapper to indicate the max value of the progress bar.",
				"The {{.progress}} wrapper also requires a {{role='progressbar'}} and {{aria}} attributes to make it accessible, including an accessible name (using {{aria-label}}, {{aria-labelledby}}, or similar).",
				"We use the inner {{.progress-bar}} purely for the visual bar and label.",
				"The {{.progress-bar}} requires an inline style, utility class, or custom CSS to set its width.",
				"We provide a special {{.progress-stacked}} class to create multiple/stacked progress bars.",
			],
		}),
		new e.text("Put that all together, and you have the following examples."),
		new e.code({
			outputAttr: { gap: 2 },
			output: () => {
				return [0, 25, 50, 75, 100].map((i) => {
					return new b.progress.container(
						{ label: "Basic example", value: i, min: 0, max: 100 },
						new b.progress.bar({ style: { width: `${i}%` } })
					);
				});
			},
		}),

		//-----------------------

		new e.title("Bar sizing"),
		new e.subtitle("Width"),
		new e.text(
			"Bootstrap provides a handful of {{nav:doc/utilities/sizing::utilities for setting width}}. Depending on your needs, these may help with quickly configuring the width of the {{.progress-bar}}."
		),

		new e.code({
			output: () => {
				return new b.progress.container(
					{ label: "Basic example", value: 75, min: 0, max: 100 },
					new b.progress.bar({ width: 75 })
				);
			},
		}),

		//-----------------------

		new e.subtitle("Height"),
		new e.text(
			"You only set a {{height}} value on the {{.progress}} container, so if you change that value, the inner {{.progress-bar}} will automatically resize accordingly."
		),

		new e.code({
			outputAttr: { gap: 2 },
			output: () => {
				return [
					new b.progress.container(
						{ label: "Example 1px high", value: 25, min: 0, max: 100, style: { height: "1px" } },
						new b.progress.bar({ style: { width: "25%" } })
					),
					new b.progress.container(
						{ label: "Example 20px high", value: 25, min: 0, max: 100, style: { height: "20px" } },
						new b.progress.bar({ style: { width: "25%" } })
					),
				];
			},
		}),

		//-----------------------

		new e.title("Labels"),
		new e.text("Add labels to your progress bars by placing text within the {{.progress-bar}}."),
		new e.code({
			output: () => {
				return new b.progress.container(
					{ label: "Example with label", value: 25, min: 0, max: 100 },
					new b.progress.bar({ style: { width: "25%" } }, "25%")
				);
			},
		}),
		new e.text(
			"Note that by default, the content inside the {{.progress-bar}} is controlled with {{overflow: hidden}}, so it doesn’t bleed out of the bar. If your progress bar is shorter than its label, the content will be capped and may become unreadable. To change this behavior, you can use {{.overflow-visible}} from the {{nav:doc/utilities/overflow::overflow utilities}}, but make sure to also define an explicit {{nav:doc/utilities/colors#colors::text color}} so the text remains readable. Be aware though that currently this approach does not take into account {{https://getbootstrap.com/docs/5.3/customize/color-modes/::color modes}}."
		),
		new e.code({
			output: () => {
				return new b.progress.container(
					{ label: "Example with label", value: 10, min: 0, max: 100 },
					new b.progress.bar(
						{ style: { width: "10%" }, overflow: "visible", textColor: "dark" },
						"Long label text for the progress bar, set to a dark color"
					)
				);
			},
		}),

		//-----------------------

		new e.title("Backgrounds"),
		new e.text("Use background utility classes to change the appearance of individual progress bars."),
		new e.code({
			outputAttr: { gap: 2 },
			output: () => {
				return ["success", "info", "warning", "danger"].map((i, ix) => {
					let val = [25, 50, 75, 100][ix];
					return new b.progress.container(
						{ label: `${i.charAt(0).toUpperCase() + i.slice(1)} example`, value: val, min: 0, max: 100 },
						new b.progress.bar({
							color: i as b.progress.IAttrBSProgressBar["color"],
							style: { width: `${val}%` },
						})
					);
				});
			},
		}),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
		),
		new e.text(
			"If you’re adding labels to progress bars with a custom background color, make sure to also set an appropriate {{text color}}, so the labels remain readable and have sufficient contrast."
		),
		new e.code({
			outputAttr: { gap: 2 },
			output: () => {
				return ["success", "info", "warning", "danger"].map((i, ix) => {
					let val = [25, 50, 75, 100][ix];
					let text = ["light", "dark", "dark", "light"][ix];
					return new b.progress.container(
						{ label: `${i.charAt(0).toUpperCase() + i.slice(1)} example`, value: val, min: 0, max: 100 },
						new b.progress.bar(
							{
								color: i as b.progress.IAttrBSProgressBar["color"],
								textColor: text as b.progress.IAttrBSProgressBar["textColor"],
								style: { width: `${val}%` },
							},
							`${val}%`
						)
					);
				});
			},
		}),
		new e.text(
			"Alternatively, you can use the new combined {{https://getbootstrap.com/docs/5.3/helpers/color-background/::color and background}} helper classes."
		),
		new e.code({
			outputAttr: { gap: 2 },
			output: () => {
				return ["success", "info", "warning", "danger"].map((i, ix) => {
					let val = [25, 50, 75, 100][ix];
					return new b.progress.container(
						{ label: `${i.charAt(0).toUpperCase() + i.slice(1)} example`, value: val, min: 0, max: 100 },
						new b.progress.bar(
							{
								textBgColor: i as b.progress.IAttrBSProgressBar["textBgColor"],
								style: { width: `${val}%` },
							},
							`${val}%`
						)
					);
				});
			},
		}),

		//-----------------------

		new e.title("Multiple bars"),
		new e.text(
			"You can include multiple progress components inside a container with {{.progress-stacked}} to create a single stacked progress bar. Note that in this case, the styling to set the visual width of the progress bar must be applied to the {{.progress}} elements, rather than the {{.progress-bars}}."
		),
		new e.code({
			output: () => {
				return new b.progress.stacked([
					new b.progress.container(
						{
							label: "Segment one",
							value: 15,
							min: 0,
							max: 100,
							style: { width: "15%" },
						},
						new b.progress.bar()
					),
					new b.progress.container(
						{
							label: "Segment two",
							value: 30,
							min: 0,
							max: 100,
							style: { width: "30%" },
						},
						new b.progress.bar({ color: "success" })
					),
					new b.progress.container(
						{
							label: "Segment three",
							value: 20,
							min: 0,
							max: 100,
							style: { width: "20%" },
						},
						new b.progress.bar({ color: "info" })
					),
				]);
			},
		}),

		//-----------------------

		new e.title("Striped"),
		new e.text(
			"Add {{.progress-bar-striped}} to any {{.progress-bar}} to apply a stripe via CSS gradient over the progress bar’s background color."
		),
		new e.code({
			outputAttr: { gap: 2 },
			output: () => {
				return [undefined, "success", "info", "warning", "danger"].map((i, ix) => {
					let val = [10, 25, 50, 75, 100][ix];
					return new b.progress.container(
						{
							label: `${i ? i.charAt(0).toUpperCase() + i.slice(1) : "Default"} striped example`,
							value: val,
							min: 0,
							max: 100,
						},
						new b.progress.bar({
							striped: true,
							textBgColor: i as b.progress.IAttrBSProgressBar["textBgColor"],
							style: { width: `${val}%` },
						})
					);
				});
			},
		}),

		//-----------------------

		new e.title("Animated stripes"),
		new e.text(
			"The striped gradient can also be animated. Add {{.progress-bar-animated}} to {{.progress-bar}} to animate the stripes right to left via CSS3 animations."
		),
		new e.code({
			output: () => {
				return new b.progress.container(
					{
						label: `Animated striped example`,
						value: 75,
						min: 0,
						max: 100,
					},
					new b.progress.bar({
						striped: true,
						animated: true,
						style: { width: `75%` },
					})
				);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, progress bars now use local CSS variables on {{.progress}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_progress.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_progress.scss",
			code: `
				--#{$prefix}progress-height: #{$progress-height};
				@include rfs($progress-font-size, --#{$prefix}progress-font-size);
				--#{$prefix}progress-bg: #{$progress-bg};
				--#{$prefix}progress-border-radius: #{$progress-border-radius};
				--#{$prefix}progress-box-shadow: #{$progress-box-shadow};
				--#{$prefix}progress-bar-color: #{$progress-bar-color};
				--#{$prefix}progress-bar-bg: #{$progress-bar-bg};
				--#{$prefix}progress-bar-transition: #{$progress-bar-transition};
			`,
		}),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, progress bars now use local CSS variables on {{.progress}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$progress-height:                   1rem;
				$progress-font-size:                $font-size-base * .75;
				$progress-bg:                       var(--#{$prefix}secondary-bg);
				$progress-border-radius:            var(--#{$prefix}border-radius);
				$progress-box-shadow:               var(--#{$prefix}box-shadow-inset);
				$progress-bar-color:                $white;
				$progress-bar-bg:                   $primary;
				$progress-bar-animation-timing:     1s linear infinite;
				$progress-bar-transition:           width .6s ease;
			`,
		}),

		//-----------------------

		new e.subtitle("Keyframes"),
		new e.text(
			"Used for creating the CSS animations for {{.progress-bar-animated}}. Included in {{scss/_progress-bar.scss}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_progress.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_progress.scss",
			code: `
				@if $enable-transitions {
				@keyframes progress-bar-stripes {
					0% { background-position-x: $progress-height; }
				}
				}
			`,
		}),
	],
};
