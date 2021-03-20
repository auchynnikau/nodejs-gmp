import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveReadLine = () => {
  rl.question("", (answer) => {
    if (answer === "exit") {
      rl.close();
    }

    console.log(`Reversed: ${answer.split("").reverse().join("")}`);
    recursiveReadLine();
  });
};

rl.on("close", () => {
  process.exit(0);
});

recursiveReadLine();
