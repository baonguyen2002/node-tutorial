const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here are the results: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task...");
