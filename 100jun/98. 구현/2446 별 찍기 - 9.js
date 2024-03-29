const read = `5`;

const input = read.toString().trim();

let star = "*".repeat(2 * Number(input) - 1).split("");
let start = -1; // ++
let end = 2 * Number(input) - 1; // --
let result = star.join("") + "\n";

for (let i = 1; i < Number(input); i++) {
	start++;
	end--;
	star[start] = " ";
	star[end] = "";
	result += star.join("") + "\n";
}

console.log(result.trim());
let result2 = result.split("\n").slice(0, -2).reverse();
console.log(result2.join("\n"));