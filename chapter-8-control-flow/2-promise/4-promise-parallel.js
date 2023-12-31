const { readFile } = require("fs/promises");
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename);

const print = (data) => {
  console.log("this is data", data);
  console.log(data.toString());
};

readFile(bigFile).then(print).catch(console.error);
readFile(mediumFile).then(print).catch(console.error);
readFile(smallFile).then(print).catch(console.error);
