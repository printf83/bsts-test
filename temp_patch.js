const fs = require('fs');
const path1 = 'src/ctl/example/_fn.ts';
let t1 = fs.readFileSync(path1, 'utf8');
const old1 = `                                        if (r) {
                                                return className.indexOf(r) >= 0;
                                        }

                                        return false;
                        if (className.length === 1) {
                                return attr.class === className[0];
`;
const rep1 = `                                        if (r) {
                                                return className.indexOf(r) >= 0;
                                        }

                                        return false;
                                });
                        }

                        if (className.length === 1) {
                                return attr.class === className[0];
`;
if (t1.includes(old1)) {
    fs.writeFileSync(path1, t1.replace(old1, rep1), 'utf8');
    console.log('patched _fn');
} else {
    console.log('no match _fn');
}
const path2 = 'src/ctl/main/search.ts';
let t2 = fs.readFileSync(path2, 'utf8');
const old2 = `                        const st = new RegExp(valueRegEx, "gmi").exec(text);
                        if (st) {
                                const stIndex = st.index;
                                text = \`${text.substring(0, stIndex)}{{m::${text.substring(
                                        stIndex,
                                        stIndex + value.length
                                )}}}${text.substring(stIndex + value.length)}\`;
                        return {
`;
const rep2 = `                        const st = new RegExp(valueRegEx, "gmi").exec(text);
                        if (st) {
                                const stIndex = st.index;
                                text = \`${text.substring(0, stIndex)}{{m::${text.substring(
                                        stIndex,
                                        stIndex + value.length
                                )}}}${text.substring(stIndex + value.length)}\`;
                        }

                        return {
`;
if (t2.includes(old2)) {
    fs.writeFileSync(path2, t2.replace(old2, rep2), 'utf8');
    console.log('patched search');
} else {
    console.log('no match search');
}
