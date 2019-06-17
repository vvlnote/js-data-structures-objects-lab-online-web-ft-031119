// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = {};
  Object.assign(newDriver, driver, {[key]:value});
  return newDriver;
}
