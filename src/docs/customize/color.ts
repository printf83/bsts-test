import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

const swatchBg = (bgColor?: core.bootstrapType.bgColor) => {
	return new h.div({
		class: "swatch",
		rounded: true,
		border: true,
		bgColor: bgColor,
	});
};

const swatchBorder = (borderColor?: core.bootstrapType.borderColor) => {
	return new h.div({
		class: "swatch",
		rounded: true,
		border: true,
		borderWidth: 5,
		borderColor: borderColor,
	});
};

const swatchText = (textColor?: core.bootstrapType.textColor) => {
	return new h.div({ class: "swatch", position: "relative", textColor: textColor }, [
		new h.span(
			{
				h: 4,
				fontWeight: "bolder",
				position: "absolute",
				width: 100,
				zIndex: 0,
				textAlign: "center",
				marginTop: 2,
				paddingTop: 1,
			},
			"Text"
		),
	]);
};

export const color: IContent = {
	title: "Color",
	description:
		"Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Colors"),
				new e.text(
					"Bootstrap’s color palette has continued to expand and become more nuanced in v5.3.0. Bootstrap’ve added new variables for {{secondary}} and {{tertiary}} text and background colors, plus{{ {color}-bg-subtle}},{{ {color}-border-subtle}}, and{{ {color}-text-emphasis}} for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on {{:root}} and are adapted for our new dark color mode while our original theme colors remain unchanged."
				),
				new e.text(
					"Colors ending in {{-rgb}} provide the {{red}}, {{green}}, {{blue}} values for use in {{rgb()}} and {{rgba()}} color modes. For example, {{rgba(var(--bs-secondary-bg-rgb), .5)}}."
				),
				new e.alert(
					{ color: "warning", callout: true },
					"{{b::Heads up!}} There’s some potential confusion with our new secondary and tertiary colors, and our existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6."
				),
				new e.table(
					{
						responsiveAttr: "bs-title-name",
						responsiveCol: "15ch auto",
						responsiveColXs: "auto",
					},
					[
						new b.table.thead(
							new b.table.tr([
								new b.table.th({ scope: "col" }, "Description"),
								new b.table.th({ scope: "col" }, "Swatch"),
								new b.table.th(
									{ scope: "col", style: { minWidth: "15rem" } },
									"Variables"
								),
							])
						),

						new b.table.tbody([
							//----------------------
							new b.table.tr([
								new b.table.td(
									{
										rowspan: 2,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Body — }}Default foreground (color) and background, including components."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("body")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-body-color}}{{br}}{{--bs-body-color-rgb}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Body — }}Default foreground (color) and background, including components."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("body")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-body-bg}}{{br}}{{--bs-body-bg-rgb}}"])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 2,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Secondary — }}Use the {{color}} option for lighter text. Use the {{bg}} option for dividers and to indicate disabled component states."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("body-secondary")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div([
										"{{--bs-secondary-color}}{{br}}{{--bs-secondary-color-rgb}}",
									])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Secondary — }}Use the {{color}} option for lighter text. Use the {{bg}} option for dividers and to indicate disabled component states."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("body-secondary")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div([
										"{{--bs-secondary-bg}}{{br}}{{--bs-secondary-bg-rgb}}",
									])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 2,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Tertiary — }}Use the {{color}} option for even lighter text. Use the {{bg}} option to style backgrounds for hover states, accents, and wells."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("body-tertiary")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div([
										"{{--bs-tertiary-color}}{{br}}{{--bs-tertiary-color-rgb}}",
									])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Tertiary — }}Use the {{color}} option for even lighter text. Use the {{bg}} option to style backgrounds for hover states, accents, and wells."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("body-tertiary")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div([
										"{{--bs-tertiary-bg}}{{br}}{{--bs-tertiary-bg-rgb}}",
									])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Emphasis — }}For higher contrast text. Not applicable for backgrounds."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("body-emphasis")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div([
										"{{--bs-emphasis-color}}{{br}}{{--bs-emphasis-color-rgb}}",
									])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Border — }}For component borders, dividers, and rules. Use {{--bs-border-color-translucent}} to blend with backgrounds with an {{rgba()}} value."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBorder()
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div([
										"{{--bs-border-color}}{{br}}{{--bs-border-color-rgb}}",
									])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 4,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("primary")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-primary}}{{br}}{{--bs-primary-rgb}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("primary-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-primary-bg-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBorder("primary-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-primary-border-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Primary — }}Main theme color, used for hyperlinks, focus styles, and component and form active states."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("primary-emphasis")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-primary-text-emphasis}}"])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 4,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Success — }}Theme color used for positive or successful actions and information."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("success")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-success}}{{br}}{{--bs-success-rgb}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Success — }}Theme color used for positive or successful actions and information."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("success-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-success-bg-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Success — }}Theme color used for positive or successful actions and information."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBorder("success-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-success-border-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Success — }}Theme color used for positive or successful actions and information."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("success-emphasis")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-success-text-emphasis}}"])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 4,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Danger — }}Theme color used for errors and dangerous actions."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("danger")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-danger}}{{br}}{{--bs-danger-rgb}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Danger — }}Theme color used for errors and dangerous actions."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("danger-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-danger-bg-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Danger — }}Theme color used for errors and dangerous actions."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBorder("danger-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-danger-border-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Danger — }}Theme color used for errors and dangerous actions."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("danger-emphasis")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-danger-text-emphasis}}"])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 4,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Warning — }}Theme color used for non-destructive warning messages."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("warning")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-warning}}{{br}}{{--bs-warning-rgb}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Warning — }}Theme color used for non-destructive warning messages."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("warning-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-warning-bg-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Warning — }}Theme color used for non-destructive warning messages."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBorder("warning-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-warning-border-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Warning — }}Theme color used for non-destructive warning messages."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("warning-emphasis")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-warning-text-emphasis}}"])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 4,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Info — }}Theme color used for neutral and informative content."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("info")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-info}}{{br}}{{--bs-info-rgb}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Info — }}Theme color used for neutral and informative content."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("info-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-info-bg-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Info — }}Theme color used for neutral and informative content."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBorder("info-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-info-border-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Info — }}Theme color used for neutral and informative content."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchText("info-emphasis")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-info-text-emphasis}}"])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 4,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Light — }}Additional theme option for less contrasting colors."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("light")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-light}}{{br}}{{--bs-light-rgb}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Light — }}Additional theme option for less contrasting colors."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("light-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-light-bg-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Light — }}Additional theme option for less contrasting colors."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBorder("light-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-light-border-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Light — }}Additional theme option for less contrasting colors."
									)
								),
								new b.table.td(swatchText("light-emphasis")),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-light-text-emphasis}}"])
								),
							]),

							//----------------------

							new b.table.tr([
								new b.table.td(
									{
										rowspan: 4,
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
									},
									new h.div(
										"{{b::Dark — }}Additional theme option for higher contrasting colors."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("dark")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-dark}}{{br}}{{--bs-dark-rgb}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Dark — }}Additional theme option for higher contrasting colors."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBg("dark-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-dark-bg-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Dark — }}Additional theme option for higher contrasting colors."
									)
								),
								new b.table.td(
									{ responsiveAttr: "bs-title-name", responsiveTitle: "Swatch" },
									swatchBorder("danger-subtle")
								),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variables",
									},
									new h.div(["{{--bs-dark-border-subtle}}"])
								),
							]),
							new b.table.tr([
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Description",
										display: ["grid", "md-none"],
									},
									new h.div(
										"{{b::Dark — }}Additional theme option for higher contrasting colors."
									)
								),
								new b.table.td(swatchText("dark-emphasis")),
								new b.table.td(
									{
										responsiveAttr: "bs-title-name",
										responsiveTitle: "Variable",
									},
									new h.div(["{{--bs-dark-text-emphasis}}"])
								),
							]),
						]),
					]
				),
			]),

			//----------------------

			new e.section([
				new e.title("Using the new colors"),
				new e.text(
					"These new colors are accessible via CSS variables and utility classes—like {{--bs-primary-bg-subtle}} and {{.bg-primary-subtle}}—allowing you to compose your own CSS rules with the variables, or to quickly apply styles via classes. The utilities are built with the color’s associated CSS variables, and since Bootstrap customize those CSS variables for dark mode, they are also adaptive to color mode by default."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div(
							{
								padding: 3,
								textColor: "primary-emphasis",
								bgColor: "primary-subtle",
								border: true,
								borderColor: "primary-subtle",
								roundedSize: 3,
							},
							"Example element with utilities"
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Theme colors"),
				new e.text(
					"Bootstrap use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s {{scss/_variables.scss}} file."
				),
				new e.item(
					new h.div(
						{ container: "fluid", margin: 0, padding: 0 },
						new h.div(
							{ row: true, gutter: 3 },
							[
								"primary",
								"secondary",
								"success",
								"danger",
								"warning",
								"info",
								"light",
								"dark",
							].map(
								(i) =>
									new h.div(
										{
											col: [12, "sm-6", "md-4"],
										},
										new h.div(
											{
												padding: 3,
												textBgColor: i as core.IAttr["textBgColor"],
												rounded: true,
											},
											core.uppercaseFirst(i)
										)
									)
							)
						)
					)
				),
				new e.text("All these colors are available as a Sass map, {{$theme-colors}}."),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
					code: `
						$theme-colors: (
						"primary":    $primary,
						"secondary":  $secondary,
						"success":    $success,
						"info":       $info,
						"warning":    $warning,
						"danger":     $danger,
						"light":      $light,
						"dark":       $dark
						);
					`,
				}),
				new e.text(
					"Check out our Sass maps and loops docs for how to modify these colors."
				),
			]),

			//----------------------

			new e.section([
				new e.title("All colors"),
				new e.text(
					"All Bootstrap colors are available as Sass variables and a Sass map in {{scss/_variables.scss}} file. To avoid increased file sizes, Bootstrap don’t create text or background color classes for each of these variables. Instead, Bootstrap choose a subset of these colors for a {{https://getbootstrap.com/docs/5.3/customize/color/#theme-colors::theme palette}}."
				),
				new e.text(
					"Be sure to monitor contrast ratios as you customize colors. As shown below, Bootstrap added three contrast ratios to each of the main colors—one for the swatch’s current colors, one for against white, and one for against black."
				),
				new e.alert({ color: "danger", callout: true }, [
					new b.alert.header(5, "Unsuppoterd in {{bsts}}"),
					"This feature will supported when Bootstrap make it opt-in by default or available in CDN.",
				]),
				new e.text(
					"If you like to use this feature using {{bsts}}, you can manually set it by class property:"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div(
							{ container: "fluid", margin: 0, padding: 0 },
							new h.div(
								{ row: true, gutter: 3 },
								[
									"blue-100",
									"blue-200",
									"blue-300",
									"blue-400",
									"blue-500",
									"blue-600",
									"blue-700",
									"blue-800",
									"blue-900",
								].map(
									(i) =>
										new h.div(
											{
												col: [12, "sm-6", "md-4"],
											},
											new h.div(
												{
													padding: 3,
													class: i,
													rounded: true,
												},
												`$${i}`
											)
										)
								)
							)
						);
					},
				}),
			]),
		];
	},
};
