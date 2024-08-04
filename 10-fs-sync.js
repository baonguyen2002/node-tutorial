const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/results-sync.txt",
  `Here are the results: ${first}, ${second}`,
  { flag: "a" } //append to file instead of overwriting existing contents
);

console.log("done with this task");
console.log("startiong next one");
