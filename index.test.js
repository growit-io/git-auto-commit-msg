const { execFileSync } = require('child_process');

const PROGRAM_FILE = './index.js'

test('exits successfully', function () => {
  expect(program().code).toBe(0);
});

function program(...argv) {
  let result = {code: 0, error: null}
  try {
    result.stdout = execFileSync(PROGRAM_FILE, argv);
  } catch (err) {
    result.code = -1 // XXX
    result.error = err
  } finally {
    return result
  }
}
