import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const checkout: IContent = {
	fullscreen: true,
	title: "Checkout",
	item: () => {
		const jumbotron = new h.section(
			new h.div({ container: true, textAlign: "center", paddingX: 5, paddingTop: 4 }, [
				new b.icon({ id: "hexagon-fill", fontDisplay: 1 }),
				new h.h1({ textColor: "body-emphasis", fontDisplay: 5 }, "Checkout form"),
				new h.p(
					{ lead: true },
					"Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
				),
			])
		);

		const payment = [
			new h.h4({ marginBottom: 3 }, "Payment"),
			new h.div({ marginY: 3 }, [
				b.form.check({
					type: "radio",
					name: "payment_type",
					label: "Credit card",
					checked: true,
				}),
				b.form.check({ type: "radio", name: "payment_type", label: "Debit card" }),
				b.form.check({ type: "radio", name: "payment_type", label: "PayPal" }),
				b.form.check({ type: "radio", name: "payment_type", label: "Boost" }),
			]),
			new h.div({ row: true, gutterY: 3 }, [
				b.form.input({
					container: { col: "md-6" },
					label: "Name on card",
					description: "Full name as displayed on card",
				}),
				b.form.input({ container: { col: "md-6" }, label: "Credit card number" }),
				b.form.input({ container: { col: "md-3" }, label: "Expiration" }),
				b.form.input({ container: { col: "md-3" }, label: "CVV" }),
			]),
		];

		const billing_address = [
			new h.h4({ marginBottom: 3 }, "Billing address"),
			new h.form({ novalidate: true, class: "needs-validation" }, [
				new h.div(
					{
						row: true,
						gutter: 3,
					},
					[
						b.form.input({
							container: { col: "sm-6" },
							label: "First name",
							required: true,
						}),
						b.form.input({
							container: { col: "sm-6" },
							label: "Last name",
							required: true,
						}),
						b.form.input({
							label: "Username",
							before: "@",
							placeholder: "Username",
							required: true,
						}),
						b.form.input({
							type: "email",
							label: "Email",
							placeholder: "you@example.com",
						}),
						b.form.input({
							label: "Address",
							placeholder: "1234 Main St",
							required: true,
						}),
						b.form.input({
							label: "Address 2",
							placeholder: "1234 Main St",
						}),
						b.form.select({
							container: { col: "sm-5" },
							label: "Country",
							required: true,
							item: [
								{ elem: "Choose...", value: "" },
								{ elem: "Malaysia", value: "my" },
							],
						}),
						b.form.select({
							container: { col: "sm-4" },
							label: "State",
							required: true,
							item: [
								{ elem: "Choose...", value: "" },
								{ elem: "Sabah", value: "sabah" },
							],
						}),
						b.form.input({
							container: { col: "sm-3" },
							type: "number",
							label: "Zip",
							required: true,
						}),
					]
				),

				new h.hr({ marginY: 4 }),

				b.form.check({ label: "Shipping address is the same as my billing address" }),
				b.form.check({ label: "Save this information for next time" }),

				new h.hr({ marginY: 4 }),

				...payment,

				new h.hr({ marginY: 4 }),

				new h.div(
					{ display: "grid" },
					new b.button({ weight: "lg", type: "submit" }, "Continue to checkout")
				),
			]),
		];

		const promo = new b.card.container(
			new b.card.body(
				{ padding: 2 },
				new h.form(
					new b.inputgroup.container([
						new b.input({ placeholder: "Promo code" }),
						new b.button({ color: "secondary", type: "submit" }, "Redeem"),
					])
				)
			)
		);

		const cart_item = (arg: { name: string; description: string; price: number }) => {
			return new b.list.item(
				{ display: "flex", justifyContent: "between", lineHeight: "sm" },
				[
					new h.div([
						new h.h6({ marginY: 0 }, arg.name),
						new h.small({ textColor: "body-secondary" }, arg.description),
					]),
					new h.span({ textColor: "body-secondary" }, `$${arg.price}`),
				]
			);
		};

		const cart_promo = (arg: { code: string; price: number }) => {
			return new b.list.item(
				{
					display: "flex",
					justifyContent: "between",
					lineHeight: "sm",
					textColor: "success",
				},
				[
					new h.div([new h.h6({ marginY: 0 }, "Promo code"), new h.small(arg.code)]),
					new h.span(`-$${arg.price}`),
				]
			);
		};

		const cart_total = (arg: { code: string; price: number }) => {
			return new b.list.item(
				{
					display: "flex",
					justifyContent: "between",
					lineHeight: "sm",
				},
				[new h.span(`Total (${arg.code})`), new h.strong(`$${arg.price}`)]
			);
		};

		const cart = [
			new h.h4(
				{
					display: "flex",
					justifyContent: "between",
					alignItem: "center",
					marginBottom: 3,
				},
				[
					new h.span({ textColor: "primary" }, "Your cart"),
					new b.badge({ textBgColor: "primary", rounded: "pill" }, "3"),
				]
			),
			new b.list.container({ marginBottom: 3 }, [
				cart_item({ name: "Product name", description: "Brief description", price: 12 }),
				cart_item({ name: "Second product", description: "Brief description", price: 12 }),
				cart_item({ name: "Third product", description: "Brief description", price: 12 }),
				cart_promo({ code: "EXAMPLECODE", price: 5 }),
				cart_total({ code: "MYR", price: 20 }),
			]),
			promo,
		];

		const main = new h.main({ row: true, gutter: 5, marginBottom: 5 }, [
			new h.section({ col: ["md-5", "lg-4"], order: "md-last" }, cart),
			new h.section({ col: ["md-7", "lg-8"] }, billing_address),
		]);

		const footer = new h.footer(
			{
				paddingY: 3,
			},
			[
				new h.div(
					{ textAlign: "center", textColor: "body-tertiary" },
					"© 2017–2023 Company Name"
				),
				new b.nav.header.container({
					paddingBottom: 3,
					marginBottom: 3,
					justifyContent: "center",
					textColor: "secondary",
					link: [
						{ href: "#", elem: "Privacy" },
						{ href: "#", elem: "Terms" },
						{ href: "#", elem: "Support" },
					],
				}),
			]
		);

		return new h.div(
			{ bgColor: "body-tertiary" },
			new h.div({ container: true }, [jumbotron, main, footer])
		);
	},
};
