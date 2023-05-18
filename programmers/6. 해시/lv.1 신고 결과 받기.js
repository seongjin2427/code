function solution(id_list, report, k) {
  const scores = {};
  const reporters = {};

  for (const id of id_list) {
    scores[id] = new Set();
    reporters[id] = new Set();
  }

  report.forEach((r) => {
    const [reporter, reported] = r.split(" ");
    scores[reported].add(reporter);
  });

  report.forEach((r) => {
    const [reporter, reported] = r.split(" ");
    if (scores[reported].size >= k) reporters[reporter].add(reported);
  });

  console.log(scores, reporters);
  return id_list.map((i) => reporters[i].size);
}

const i = ["muzi", "frodo", "apeach", "neo", "a"];
const r = [
  "a muzi",
  "a neo",
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

console.log(solution(i, r, k));
