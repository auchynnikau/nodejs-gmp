import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", () => {
  process.exit(0);
});

const recursiveReadLine = () => {
  rl.question("Type string to reverse: ", (answer) => {
    if (answer === "exit") {
      rl.close();
    }

    console.log(`Reversed: ${answer.split("").reverse().join("")}`);
    recursiveReadLine();
  });
};

recursiveReadLine();
