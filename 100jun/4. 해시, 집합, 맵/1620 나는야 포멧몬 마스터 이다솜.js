const read = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`;

const input = read.toString().trim().split('\n');

const [N, M] = input
  .shift()
  .split(' ')
  .map((v) => +v);

const list = input.slice(0, N);
const problems = input.slice(N, N + M);

const pokemon = {};
const pokemonNumbers = {};
list.forEach((l, i) => {
  pokemon[l] = i + 1;
  pokemonNumbers[i + 1] = l;
});

problems.forEach((p) => {
  console.log(pokemon[p] || pokemonNumbers[p]);
});
