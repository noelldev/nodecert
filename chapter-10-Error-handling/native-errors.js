class OddError extends Error {
  constructor(varName = "") {
    //error message = varName + ' must be even'
    super(varName + " must be even");
    this.code = "ERR_MUST_BE_EVEN";
  }
  get name() {
    return "OddError";
  }
}

function doTask(amount) {
  if (typeof amount !== "number")
    throw new TypeError("amount must be a number");
  if (amount <= 0) throw new RangeError("amount must be greater than zero");
  if (amount % 2) throw new OddError("amount");
  return amount / 2;
}

try {
  const result = doTask(4);
  //result() //this will throw a TypeError
  console.log("result", result);
} catch (err) {
  console.log(err);
  if (err instanceof TypeError) {
    console.error("wrong type");
  } else if (err instanceof RangeError) {
    console.error("out of range");
  } else if (err.name === "OddError") {
    console.error(err.message);
  } else {
    console.error("Unknown error", err);
  }
}
