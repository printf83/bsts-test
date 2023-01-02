import { tag, core } from "@printf83/bsts";

console.log(core.UUID());
console.log(core.UUID());

let body = document.getElementsByTagName("BODY");
core.appendChild(body, [{ tag: "h1", elem: null }]);
