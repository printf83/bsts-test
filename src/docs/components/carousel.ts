import { h, b, core } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const carousel: IAttrContent = {
	title: "Carousel",
	description: "A slideshow component for cycling through elements—images or slides of text—like a carousel.",
	item: [
		new e.title("How it works"),
		new e.ul({
			item: [
				"The carousel ({{b.carousel.container}}) is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.",
				"For performance reasons, {{b::carousels must be manually initialized}} using the {{nav:docs/components/carousel#methods::carousel constructor method}}. Without initialization, some of the event listeners (specifically, the events needed touch/swipe support) will not be registered until a user has explicitly activated a control or indicator.",
				"The only exception are {{nav:docs/components/carousel#autoplaying_carousels::autoplaying carousels}} with the {{data-bs-ride='carousel'}} attribute as these are initialized automatically on page load. If you’re using autoplaying carousels with the data attribute, {{b::don’t explicitly initialize the same carousels with the constructor method}}.",
				"Nested carousels are not supported. You should also be aware that carousels in general can often cause usability and accessibility challenges.",
			],
		}),
		new e.alert(
			{ color: "info", callout: true },
			"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}."
		),

		//-----------------------

		new e.title("Basic examples"),
		new e.text(
			"Here is a basic example of a carousel with three slides. Note the previous/next controls. Bootstrap recommend using {{b.carousel.inner.control.prev}} and {{b.carousel.inner.control.next}} component, but you can also use {{h.a}} elements with {{role:'button'}}."
		),
		new e.code({
			output: () => {
				return new b.carousel.container({ id: "carouselExample" }, [
					new b.carousel.indicators.container(
						[0, 1, 2, 3, 4, 5, 6].map((_i, ix) => {
							return new b.carousel.indicators.button({
								target: "#carouselExample",
								slide: ix,
								active: ix === 0 ? true : undefined,
							});
						})
					),
					new b.carousel.inner.container(
						[0, 1, 2, 3, 4, 5, 6].map((i, ix) => {
							return new b.carousel.inner.item.container({ active: ix === 0 ? true : undefined }, [
								new b.carousel.inner.item.img({ src: `https://picsum.photos/seed/bsts_${i}/710/400` }),
								new b.carousel.inner.item.caption([
									new h.h(5, `Slide #${ix + 1}`),
									new h.p(`Some representative placeholder content for the slide #${ix + 1}.`),
								]),
							]);
						})
					),
					new b.carousel.inner.control.prev({ target: "#carouselExample" }),
					new b.carousel.inner.control.next({ target: "#carouselExample" }),
				]);
			},
		}),

		new e.text(
			"Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit."
		),
		new e.text(
			"{{b::You must add the}} {{.active}} {{b::class to one of the slides}}, otherwise the carousel will not be visible. Also be sure to set a unique {{id}} on the {{.carousel}} for optional controls, especially if you’re using multiple carousels on a single page. Control and indicator elements must have a {{data-bs-target}} attribute (or {{href}} for links) that matches the {{id}} of the {{.carousel}} element."
		),
		new e.text("Bootstrap TS do this automaticly for you."),

		//-----------------------

		new e.subtitle("Using item"),
		new e.code({
			output: () => {
				return new b.carousel.container({
					itemControl: true,
					itemIndicator: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
							caption: [
								new h.h(5, `Slide #${i + 1}`),
								new h.p(`Some representative placeholder content for the slide #${i + 1}.`),
							],
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.subtitle("Indicators"),
		new e.text(
			"You can add indicators to the carousel using {{itemIndicator:true}}, alongside the previous/next controls using {{itemControl:true}}. The indicators let users jump directly to a particular slide."
		),
		new e.code({
			output: () => {
				return new b.carousel.container({
					itemControl: true,
					itemIndicator: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.subtitle("Captions"),
		new e.text(
			"You can add captions to your slides with the {{b.carousel.inner.item.caption}} component within any {{b.carousel.inner.item.container}}. They can be easily hidden on smaller viewports, as shown below, with optional {{nav:docs/utilities/display::display utilities}}. Bootstrap hide them initially with {{display:'none'}} and bring them back on medium-sized devices with {{display:'md-block'}}."
		),
		new e.code({
			output: () => {
				return new b.carousel.container({
					itemControl: true,
					itemIndicator: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
							caption: [
								new h.h(5, `Slide #${i + 1}`),
								new h.p(`Some representative placeholder content for the slide #${i + 1}.`),
							],
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.subtitle("Crossfade"),
		new e.text(
			"Add {{fade:true}} to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add {{bgColor:'body'}} or some custom CSS to the {{b.carousel.inner.item.container}} for proper crossfading."
		),
		new e.code({
			output: () => {
				return new b.carousel.container({
					fade: true,
					itemControl: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.title("Autoplaying carousels"),
		new e.text(
			"You can make your carousels autoplay on page load by setting the {{ride}} option to {{carousel}}. Autoplaying carousels automatically pause while hovered with the mouse. This behavior can be controlled with the {{pause}} option. In browsers that support the {{https://www.w3.org/TR/page-visibility/::Page Visibility API}}, the carousel will stop cycling when the webpage is not visible to the user (such as when the browser tab is inactive, or when the browser window is minimized)."
		),
		new e.text("Bootstrap TS automaticly handle this."),
		new e.alert({ color: "info", callout: true }, [
			new h.p(
				"For accessibility reasons, Bootstrap recommend avoiding the use of autoplaying carousels. If your page does include an autoplaying carousel, Bootstrap recommend providing an additional button or control to explicitly pause/stop the carousel."
			),
			new h.p(
				"See {{https://www.w3.org/TR/WCAG21/#pause-stop-hide::WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide}}."
			),
		]),
		new e.code({
			output: () => {
				return new b.carousel.container({
					autoPlay: true,
					itemControl: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
						};
					}),
				});
			},
		}),

		new e.text(
			"When the {{autoPlay}} property is set to {{false}}, rather than {{truel}}, the carousel won’t automatically start to cycle on page load. Instead, it will only start after the first user interaction."
		),

		new e.code({
			output: () => {
				return new b.carousel.container({
					autoPlay: false,
					itemControl: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
						};
					}),
				});
			},
		}),

		//------------

		new e.subtitle("Individual {{.carousel-item}} interval"),
		new e.text(
			"Add {{interval='<milisecond>'}} to a {{b.carousel.inner.item.container}} to change the amount of time to delay between automatically cycling to the next item."
		),
		new e.code({
			output: () => {
				return new b.carousel.container({
					autoPlay: false,
					itemControl: true,
					item: [1000, 2000, 3000, 4000, 5000, 6000, 7000].map((i, ix) => {
						return {
							interval: i,
							src: `https://picsum.photos/seed/bsts_${ix}/710/400`,
						};
					}),
				});
			},
		}),

		//------------

		new e.subtitle("Autoplaying carousels without controls"),
		new e.text(
			"Here’s a carousel with slides only. Note the presence of the .d-block and .w-100 on carousel images to prevent browser default image alignment."
		),
		new e.code({
			output: () => {
				return new b.carousel.container({
					autoPlay: true,
					item: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
						};
					}),
				});
			},
		}),

		//------------

		new e.title("Disable touch swiping"),
		new e.text(
			"Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled by setting the {{disableTouch}} property to {{true}}."
		),
		new e.code({
			output: () => {
				return new b.carousel.container({
					disableTouch: true,
					itemControl: true,
					item: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
						};
					}),
				});
			},
		}),

		//------------

		new e.title("Dark variant"),
		new e.text(
			"Add {{.carousel-dark}} to the {{.carousel}} for darker controls, indicators, and captions. Controls are inverted compared to their default white fill with the {{filter}} CSS property. Captions and controls have additional Sass variables that customize the {{color}} and {{background-color}}."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Heads up!}} Dark variants for components were deprecated in v5.3.0 with the introduction of color modes. Instead of adding {{.carousel-dark}}, set {{theme:'dark'}} on the {{b.carousel.container}}, a parent wrapper, or the component itself."
		),

		new e.code({
			output: () => {
				return new b.carousel.container({
					theme: "dark",
					itemControl: true,
					item: ["first", "second", "third", "fourth", "fifth"].map((i, ix) => {
						return {
							src: `https://picsum.photos/seed/bsts_${ix}/710/400`,
							caption: [
								new h.h(5, `${i.charAt(0).toUpperCase() + i.slice(1)} slide label`),
								new h.p(`Some representative placeholder content for the ${i} slide.`),
							],
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.title("Custom transition"),
		new e.text(
			"The transition duration of {{.carousel-item}} can be changed with the {{$carousel-transition-duration}} Sass variable before compiling or custom styles if you’re using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (e.g. {{transition: transform 2s ease, opacity .5s ease-out}})."
		),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Sass variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, carousel now use local CSS variables on {{.carousel}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
			    $carousel-control-color:             $white;
				$carousel-control-width:             15%;
				$carousel-control-opacity:           .5;
				$carousel-control-hover-opacity:     .9;
				$carousel-control-transition:        opacity .15s ease;

				$carousel-indicator-width:           30px;
				$carousel-indicator-height:          3px;
				$carousel-indicator-hit-area-height: 10px;
				$carousel-indicator-spacer:          3px;
				$carousel-indicator-opacity:         .5;
				$carousel-indicator-active-bg:       $white;
				$carousel-indicator-active-opacity:  1;
				$carousel-indicator-transition:      opacity .6s ease;

				$carousel-caption-width:             70%;
				$carousel-caption-color:             $white;
				$carousel-caption-padding-y:         1.25rem;
				$carousel-caption-spacer:            1.25rem;

				$carousel-control-icon-width:        2rem;

				$carousel-control-prev-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>");
				$carousel-control-next-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>");

				$carousel-transition-duration:       .6s;
				$carousel-transition:                transform $carousel-transition-duration ease-in-out; // Define transform transition first if using multiple transitions (e.g., 'transform 2s ease, opacity .5s ease-out')
			`,
		}),
		// new e.text("Variables for the {{nav:docs/components/carousel#dark_variant::dark carousel}}:"),

		// new e.codepreview({
		// 	type: "css",
		// 	title: "scss/_variables.scss",
		// 	source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
		// 	code: `
		// 	    $carousel-dark-indicator-active-bg:  $black;
		// 		$carousel-dark-caption-color:        $black;
		// 		$carousel-dark-control-icon-filter:  invert(1) grayscale(100);
		// 	`,
		// }),

		//-----------------------

		new e.title("Usage"),
		new e.subtitle("Via data attributes"),
		new e.text(
			"Use data attributes to easily control the position of the carousel. {{data-bs-slide}} accepts the keywords {{prev}} or {{next}}, which alters the slide position relative to its current position. Alternatively, use {{data-bs-slide-to}} to pass a raw slide index to the carousel {{data-bs-slide-to='2'}}, which shifts the slide position to a particular index beginning with {{0}}."
		),
		new e.subtitle("Via JavaScript"),
		new e.text("Call carousel manually with:"),
		new e.codepreview({
			type: "js",
			code: `
			    const carousel = new bootstrap.Carousel('#myCarousel')
				`,
		}),

		//-----------------------

		new e.subtitle("Options"),
		new e.text(
			`As options can be passed via data attributes or JavaScript, you can append an option name to {{data-bs-}}, as in {{data-bs-animation="{value}"}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data-bs-custom-class="beautifier"}} instead of {{data-bs-customClass="beautifier"}}.`
		),
		new e.text(
			`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data-bs-config='{"delay":0, "title":123}'}} and {{data-bs-title="456"}} attributes, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data-bs-config}}. In addition, existing data attributes are able to house JSON values like {{data-bs-delay='{"show":0,"hide":150}'}}.`
		),
		new e.table({
			item: [
				["Name", "Type", "Default", "Description"],
				[
					"{{interval}}",
					"number",
					"{{5000}}",
					"The amount of time to delay between automatically cycling an item.",
				],
				["{{keyboard}}", "boolean", "{{true}}", "Whether the carousel should react to keyboard events."],
				[
					"{{pause}}",
					"string, boolean",
					"{{'hover'}}",
					"If set to {{'hover'}}, pauses the cycling of the carousel on {{mouseenter}} and resumes the cycling of the carousel on {{mouseleave}}. If set to {{false}}, hovering over the carousel won’t pause it. On touch-enabled devices, when set to {{'hover'}}, cycling will pause on {{touchend}} (once the user finished interacting with the carousel) for two intervals, before automatically resuming. This is in addition to the mouse behavior.",
				],
				[
					"{{ride}}",
					"string, boolean",
					"{{false}}",
					"If set to {{true}}, autoplays the carousel after the user manually cycles the first item. If set to {{'carousel'}}, autoplays the carousel on load.",
				],
				[
					"{{touch}}",
					"boolean",
					"{{true}}",
					"Whether the carousel should support left/right swipe interactions on touchscreen devices.",
				],
				[
					"{{wrap}}",
					"boolean",
					"{{true}}",
					"Whether the carousel should cycle continuously or have hard stops.",
				],
			],
		}),

		//-----------------------

		new e.subtitle("Methods"),
		new e.alert(
			{ color: "danger", callout: true },
			"{{b::All API methods are asynchronous and start a transition.}} They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}."
		),
		new e.text(
			"You can create a carousel instance with the carousel constructor, and pass on any additional options. For example, to manually initialize an autoplaying carousel (assuming you’re not using the {{data-bs-ride='carousel'}} attribute in the markup itself) with a specific interval and with touch support disabled, you can use:"
		),
		new e.codepreview({
			type: "js",
			code: `
			    const myCarouselElement = document.querySelector('#myCarousel')

				const carousel = new bootstrap.Carousel(myCarouselElement, {
					interval: 2000,
					touch: false
				})
				`,
		}),

		new e.table({
			item: [
				["Method", "Description"],
				["{{cycle}}", "Starts cycling through the carousel items from left to right."],
				["{{dispose}}", "Destroys an element’s carousel. (Removes stored data on the DOM element)"],
				[
					"{{getInstance}}",
					"Static method which allows you to get the carousel instance associated to a DOM element. You can use it like this: {{bootstrap.Carousel.getInstance(element)}}.",
				],
				[
					"{{getOrCreateInstance}}",
					"Static method which returns a carousel instance associated to a DOM element, or creates a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Carousel.getOrCreateInstance(element)}}.",
				],
				[
					"{{next}}",
					"Cycles to the next item. {{b::Returns to the caller before the next item has been shown}} (e.g., before the {{slid.bs.carousel}} event occurs).",
				],
				[
					"{{nextWhenVisible}}",
					"Don’t cycle carousel to next when the page, the carousel, or the carousel’s parent aren’t visible. {{b::Returns to the caller before the target item has been shown}}.",
				],
				["{{pause}}", "Stops the carousel from cycling through items."],
				[
					"{{prev}}",
					"Cycles to the previous item. {{b::Returns to the caller before the previous item has been shown}} (e.g., before the {{slid.bs.carousel}} event occurs).",
				],
				[
					"{{to}}",
					"Cycles the carousel to a particular frame (0 based, similar to an array). {{b::Returns to the caller before the target item has been shown}} (e.g., before the {{slid.bs.carousel}} event occurs).",
				],
			],
		}),

		//-----------------------

		new e.subtitle("Events"),
		new e.text(
			"Bootstrap’s carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:"
		),
		new e.ul({
			item: [
				"{{direction}} : The direction in which the carousel is sliding (either 'left' or 'right').",
				"{{relatedTarget}} : The DOM element that is being slid into place as the active item.",
				"{{from}} : The index of the current item",
				"{{to}} : The index of the next item",
			],
		}),
		new e.text("All carousel events are fired at the carousel itself (i.e. at the {{<div class='carousel'>}})."),
		new e.table({
			item: [
				["Event type", "Description"],
				["{{slid.bs.carousel}}", "Fired when the carousel has completed its slide transition."],
				["{{slide.bs.carousel}}", "Fires immediately when the slide instance method is invoked."],
			],
		}),

		new e.code({
			output: () => {
				return new b.button(
					{
						on: {
							click: (event) => {
								const target = event.target as HTMLElement;
								core.replaceWith(
									target,
									new b.carousel.container({
										disableTouch: true,
										itemControl: true,
										item: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
											return {
												src: `https://picsum.photos/seed/bsts_${i}/710/400`,
											};
										}),
										on: {
											"slide.bs.carousel": (event) => {
												let carouselEvent = (<unknown>event) as bootstrap.Carousel.Event;

												b.toast.show(
													"top-end",
													b.toast.simple({
														title: "slide.bs.carousel",
														color: "info",
														elem: [
															`Direction: {{b::${carouselEvent.direction}}}{{br}}
															From: {{b::${carouselEvent.from}}}{{br}}
															To: {{b::${carouselEvent.to}}}{{br}}
															relatedTarget: {{b::${core.elemInfo(carouselEvent.relatedTarget as HTMLElement)}}}`,
														],
													})
												);
											},
										},
									})
								);
							},
						},
					},
					"Show event preview"
				);
			},
		}),
	],
};
