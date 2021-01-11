const sentence = "hello there from lighthouse labs";

let timer = 0;
const timerIncrement = 100;

for (const char of sentence) {
  timer += timerIncrement;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer)
}

setTimeout(() => {
  process.stdout.write("\n");
}, timer + timerIncrement)