module.exports = function() {
  const currentdate = new Date();
  const datetime = `The Current date and time is ${currentdate.toLocaleDateString()} ${currentdate.toLocaleTimeString()}`;
  return datetime;
};
