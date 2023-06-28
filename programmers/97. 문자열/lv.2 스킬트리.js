function solution(skill, skill_trees) {
  return skill_trees.filter((skills) => {
    let copySkill = skill;

    for (const s of skills) {
      const index = copySkill.indexOf(s);
      if (index > 0) return;
      else if (!index) copySkill = copySkill.slice(1);
    }
    return true;
  }).length;
}

const s = "CBD";
const sk = ["BACDE", "CBADF", "AECB", "BDA", "DBC"];
console.log(solution(s, sk));
