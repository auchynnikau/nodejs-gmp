import { pipeline } from "stream";
import csv from "csvtojson";
import fs from "fs";

const csvFilePath = "src/csv/task2.csv";
const txtFilePath = "src/csv/task2.txt";

const csvToTxt = () => {
  pipeline(
    fs.createReadStream(csvFilePath).pipe(csv()),
    fs.createWriteStream(txtFilePath),
    (err) => {
      if (err) {
        console.error("Pipeline failed", err);
      } else {
        console.log("Pipeline succeeded");
      }
    }
  );
};

csvToTxt();
