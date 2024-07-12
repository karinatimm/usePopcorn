const countAverage = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
export default countAverage;
