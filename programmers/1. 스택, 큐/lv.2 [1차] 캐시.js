function solution(cacheSize, cities) {
  const cache = [];
  cities = cities.map((city) => city.toLowerCase());

  return cities
    .map((city) => {
      const index = cache.findIndex((c) => c === city);

      if (cacheSize !== 0 && 0 <= index) {
        const target = cache.splice(index, 1);
        cache.push(...target);
        return 1;
      }

      if (cacheSize <= cache.length) cache.shift();
      cache.push(city);
      return 5;
    })
    .reduce((a, b) => a + b);
}

const cache = 3;
const c = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
];

console.log(solution(cache, c));
