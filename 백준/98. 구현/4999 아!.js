const read = `ah
aah`;
const input = read.toString().trim().split('\n');
const jaehwan = check(input[0].split(''));
const doctor = check(input[1].split(''));
console.log('jaehwan', jaehwan);
console.log('doctor', doctor);

if (!doctor.a) {
  console.log('go');
} else if (jaehwan.a >= doctor.a) {
  console.log('go');
} else if (!jaehwan) {
  console.log('no');
} else {
  console.log('no');
}

function check(aah) {
  const count = {};
  aah.forEach((a) => (count[a] = +count[a] + 1 || 1));
  return count;
}
