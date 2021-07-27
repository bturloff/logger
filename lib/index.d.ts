declare type level = 0 | 1 | 2 | 3;
declare class MyLogger {
    #private;
    private level;
    private bg;
    private color;
    constructor(label: string, level?: level);
    log: (...text: Array<any>) => void;
    private setColor;
}
export default MyLogger;
//# sourceMappingURL=index.d.ts.map