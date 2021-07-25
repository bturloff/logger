type level = 0 | 1 | 2 | 3
type bg = "blue" | "green" | "brown" | "red"

const LOG_LEVEL = 0;
let nextColorIdx = 0;
const colorCombos = [
  ["blue", "white"],
  ["darkgreen", "white"],
  ["red", "white"],
  ["cadetblue", "white"],
  ["purple", "white"],
  ["green", "white"],
]

class MyLogger {
  private label: string
  private level: level
  private bg: string
  private color: string

  constructor(label: string, level: level = 3) {
    this.label = label
    this.level = level
    this.setColor();
  }

  log = (...text: Array<any>) => {
    if (this.level > LOG_LEVEL)
      console.log(`%c${this.label}: `, `color: ${this.color}; background-color: ${this.bg}`, ...text)
  }

  private setColor = () => {
    const nextColor = colorCombos[nextColorIdx];
    nextColorIdx = (nextColorIdx + 1) % (colorCombos.length);
    this.bg = nextColor[0]
    this.color = nextColor[1]
  }
}

export default MyLogger
