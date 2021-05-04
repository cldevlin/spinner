let symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    process.stdout.write(symbols[i]);
  }, i * 200 - 100)
}

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300)
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500)
// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700)
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900)
// setTimeout(() => {
//   process.stdout.write('\n');
// }, 1100)

