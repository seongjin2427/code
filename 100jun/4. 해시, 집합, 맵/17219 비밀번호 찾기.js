const read = `16 4
noj.am IU
acmicpc.net UAENA
startlink.io THEKINGOD
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr`;

const input = read.toString().trim().split('\n');

const [N, M] = input
  .shift()
  .split(' ')
  .map((v) => +v);

const list = input.slice(0, N);
const sites = input.slice(N, N + M);

const passwords = {};

for (const l of list) {
  const [site, password] = l.split(' ');
  passwords[site] = password;
}

let str = '';

sites.forEach((site) => {
  str += passwords[site] + '\n';
});

console.log(str);
