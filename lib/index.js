var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MyLogger_label;
const LOG_LEVEL = 0;
let nextColorIdx = 0;
const colorCombos = [
    ["blue", "white"],
    ["darkgreen", "white"],
    ["red", "white"],
    ["cadetblue", "white"],
    ["purple", "white"],
    ["green", "white"],
];
class MyLogger {
    constructor(label, level = 3) {
        _MyLogger_label.set(this, void 0);
        this.bg = "";
        this.color = "";
        this.log = (...text) => {
            if (this.level > LOG_LEVEL)
                console.log(`%c${__classPrivateFieldGet(this, _MyLogger_label, "f")}: `, `color: ${this.color}; background-color: ${this.bg}`, ...text);
        };
        this.setColor = () => {
            const nextColor = colorCombos[nextColorIdx];
            nextColorIdx = (nextColorIdx + 1) % (colorCombos.length);
            this.bg = nextColor[0];
            this.color = nextColor[1];
        };
        __classPrivateFieldSet(this, _MyLogger_label, label, "f");
        this.level = level;
        this.setColor();
    }
}
_MyLogger_label = new WeakMap();
export default MyLogger;
//# sourceMappingURL=index.js.map