"use strict";
const net = require("net");
const { Transform, pipeline } = require("stream");
const { scrypt } = require("crypto");
const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding: "hex",
    transform(chunk, enc, next) {
      console.log(chunk);
      scrypt(chunk, "a-salt", 32, (err, key) => {
        if (err) {
          next(err);
          return;
        }
        next(null, key);
      });
    },
  });
};

net
  .createServer((socket) => {
    const transform = createTransformStream();
    const interval = setInterval(() => {
      socket.write("beat");
    }, 1000);

    // The pipeline command will call pipe on every stream passed to it, and will allow a function to be
    // passed as the final function - callback handler
    pipeline(socket, transform, socket, (err) => {
      if (err) {
        console.error("there was a socket error", err);
      }
      clearInterval(interval);
    });
  })
  .listen(3000);
