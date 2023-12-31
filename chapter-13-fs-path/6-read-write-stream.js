"use strict";
const { pipeline } = require("stream");
const { join } = require("path");
const { createReadStream, createWriteStream } = require("fs");

pipeline(
  createReadStream(__filename),
  createWriteStream(join(__dirname, "read-write-stream.txt")),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("finished writing");
  }
);
