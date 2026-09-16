// Tiny test suite so the merge gate has real tests to run.
const _ = require("lodash");

const chunks = _.chunk([1, 2, 3, 4], 2);
if (chunks.length !== 2) {
  console.error("FAIL: lodash.chunk");
  process.exit(1);
}
console.log("ok: lodash", require("lodash/package.json").version);
