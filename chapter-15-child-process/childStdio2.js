"use strict";
// const { spawn } = require("child_process");
// const sp = spawn(
//   process.execPath,
//   ["-e", `console.error('err output'); process.stdin.pipe(process.stdout)`],
//   { stdio: ["pipe", "inherit", "ignore"] }
// );
// sp.stdin.write("this input will become output\n");
// sp.stdin.end();

const { spawnSync } = require("child_process");
spawnSync(
  process.execPath,
  ["-e", `console.error('err output'); process.stdin.pipe(process.stdout)`],
  {
    input: "this input will become output\n",
    stdio: ["pipe", "inherit", "ignore"],
  }
);
