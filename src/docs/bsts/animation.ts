import { Icon } from "../../../node_modules/@printf83/bsts/build/types/bootstrap/icon.js";

import { b, core, h } from "@printf83/bsts";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";

export const animation: IContent = {
	title: "Animation",
	description: "Add animation to element",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Animation"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						return [
							"rotation",
							"sidetoside",
							"zoom-in",
							"zoom-out",
							"spin",
							"pulse",
							"shake",
							"barrel-roll",
							"floater",
							"wiggle",
							"pound",
							"heartbeat",
							"roller-in-right",
							"roller-in-left",
							"roller-out-right",
							"roller-out-left",
							"slide-in-bottom",
							"slide-in-top",
							"slide-in-left",
							"slide-in-right",
							"slide-out-bottom",
							"slide-out-top",
							"slide-out-left",
							"slide-out-right",
							"fade-in",
							"fade-out",
							"rotate-in-right",
							"rotate-in-left",
							"rotate-in",
							"rotate-out-right",
							"rotate-out-left",
							"rotate-out",
							"bounce-in",
							"bounce-out",
						].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										overflow: "hidden",
										padding: 2,
										border: true,
										rounded: 2,
										pointerEvent: "auto",
										style: { width: "8rem" },
										data: { animate: i },
										on: {
											click: (event) => {
												const target = event.currentTarget as Element;
												const animateData =
													target.getAttribute("data-animate");
												core.replaceChild(
													target,
													new b.caption({
														icon: new b.icon(
															{
																animate:
																	animateData as Icon["animate"],
																fontSize: 1,
															},
															"asterisk"
														),
														iconPosition: "top",
														elem: i,
													})
												);
											},
										},
									},
									new b.caption({
										icon: new b.icon(
											{
												animate: i as Icon["animate"],
												fontSize: 1,
											},
											"asterisk"
										),
										iconPosition: "top",
										elem: i,
									})
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Animation duration"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						return [
							"50ms",
							"100ms",
							"250ms",
							"300ms",
							"350ms",
							"400ms",
							"450ms",
							"500ms",
							"600ms",
							"700ms",
							"800ms",
							"900ms",
							"1s",
							"1500ms",
							"2s",
							"2500ms",
							"3s",
							"3500ms",
							"4s",
							"4500ms",
							"5s",
						].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										overflow: "hidden",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												animateDuration: i as Icon["animateDuration"],
												animate: "rotation",
												animateRepeat: "infinite",
												fontSize: 1,
											},
											"asterisk"
										),
										iconPosition: "top",
										elem: i,
									})
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Animation delay"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						return [
							"50ms",
							"100ms",
							"250ms",
							"300ms",
							"350ms",
							"400ms",
							"450ms",
							"500ms",
							"600ms",
							"700ms",
							"800ms",
							"900ms",
							"1s",
							"1500ms",
							"2s",
							"2500ms",
							"3s",
							"3500ms",
							"4s",
							"4500ms",
							"5s",
						].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										overflow: "hidden",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												animateDelay: i as Icon["animateDelay"],
												animate: "rotation",
												animateRepeat: "infinite",
												fontSize: 1,
											},
											"asterisk"
										),
										iconPosition: "top",
										elem: i,
									})
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Animation repeat"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						return ["1", "2", "3", "5", "10", "infinite"].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										overflow: "hidden",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												animateRepeat: i as Icon["animateRepeat"],
												animate: "rotation",
												fontSize: 1,
											},
											"asterisk"
										),
										iconPosition: "top",
										elem: i,
									})
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Animation direction"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						return [
							"normal",
							"reverse",
							"alternate",
							"alternate-reverse",
							"normal-reverse",
							"alternate-reverse-normal",
						].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										overflow: "hidden",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												animateDirection: i as Icon["animateDirection"],
												animate: "rotation",
												animateRepeat: "infinite",
												fontSize: 1,
											},
											"asterisk"
										),
										iconPosition: "top",
										elem: i,
									})
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Animation fill"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						return [
							"none",
							"forwards",
							"backwards",
							"both",
							"none-backward",
							"both-foward-none",
						].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										overflow: "hidden",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												animateDirection: i as Icon["animateDirection"],
												animate: "rotation",
												animateRepeat: "infinite",
												fontSize: 1,
											},
											"asterisk"
										),
										iconPosition: "top",
										elem: i,
									})
								)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Animation timing"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 3 },
					output: () => {
						return ["ease", "ease-in-out", "linear", "zoom", "bounce"].map(
							(i) =>
								new h.div(
									{
										display: "flex",
										justifyContent: "center",
										alignItem: "center",
										overflow: "hidden",
										padding: 2,
										border: true,
										rounded: 2,
										style: { width: "8rem" },
									},
									new b.caption({
										icon: new b.icon(
											{
												animateTiming: i as Icon["animateTiming"],
												animate: "rotation",
												animateRepeat: "infinite",
												fontSize: 1,
											},
											"asterisk"
										),
										iconPosition: "top",
										elem: i,
									})
								)
						);
					},
				}),
			]),
		];
	},
};
