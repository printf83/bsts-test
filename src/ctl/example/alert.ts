import { core, h, b, I } from "@printf83/bsts";
type AlertContainer = I.b.alert.container;

const convert = (attr: AlertContainer) => {
	let tAttr: core.attr = {};

	tAttr.class = "example-alert";
	tAttr.marginBottom ??= 3;
	tAttr.elem = new b.alert.container(attr);

	return tAttr;
};

export class alert extends h.div {
	constructor();
	constructor(attr: AlertContainer);
	constructor(elem: core.elem | core.elem[]);
	constructor(attr: AlertContainer, elem: core.elem | core.elem[]);
	constructor(...arg: any[]) {
		super(convert(core.bsConstructor<AlertContainer>("elem", arg)));
	}
}
