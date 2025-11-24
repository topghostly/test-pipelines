const addAnswers = require("./add-logic");

function addTest() {
  const result = addAnswers(10, 20);
  return result === 30;
}

if (addTest()) {
  console.log("Add function tested and passed.");
  process.exit(0);
} else {
  console.log("Add function test failed.");
  process.exit(1);
}
