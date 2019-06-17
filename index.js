// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = {};
  Object.assign(newDriver, driver, {[key]:value});
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {};
  Object.assign(newDriver, driver);
  console.log(`before deletion : newDriver = ${newDriver[key]}, driver = ${driver[key]}`);
  delete newDriver.key;
    console.log(`after deletion : newDriver = ${newDriver[key]}, driver = ${driver[key]}`);
  return newDriver;
}
