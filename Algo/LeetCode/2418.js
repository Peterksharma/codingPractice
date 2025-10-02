/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  names = ["Mary", "John", "Emma"];
  heights = [180, 165, 170];

  let hn = new Map();
  let arrayAnswer = [];

  for (let i = 0; i < heights.length; i++) {
    hn.set(heights[i], names[i]);
  }

  
  for (let i = 0; i < names.length ; i++) {
  const highestKey = Math.max(...hn.keys());
  const valueOfKey = hn.get(highestKey);
  arrayAnswer.push(valueOfKey)
  hn.delete(highestKey);
  }

  return arrayAnswer
};

sortPeople();
