// Code your solution here
function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
    return win ? win.year : undefined;
  }

  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
  };