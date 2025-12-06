process.env.BUN_CONFIG_VERBOSE_FETCH = "false";

await fetch("https://example.com", {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
})

// Create an error
// const err = new Error("Something went wrong");
// console.log(Bun.inspect(err, { colors: true }));

// Error.prepareStackTrace = (err, stack) => {
//   return stack.map(callSite => {
//     return callSite.getThis();
//   });
// };

// const error = new Error("Something went wrong");
// console.log(error.stack);
// // [ "error.js" ]

const fn = () => {
  function myInner() {
    throw err;
  }

  try {
    myInner();
  } catch (err) {
    console.log(err.stack);
    console.log("");
    console.log("-- captureStackTrace --");
    console.log("");
    Error.captureStackTrace(err, fn);
    console.log(err.stack);
  }
};

fn();