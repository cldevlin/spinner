let symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    process.stdout.write(symbols[i]);
  }, i * 200 - 100)
}
