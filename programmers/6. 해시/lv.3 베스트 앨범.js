function solution(genres, plays) {
  const best = [];
  const songs = [];
  const sortedSongs = [];
  const uniqueGenres = new Set(genres);

  genres.forEach((genre, index) => {
    songs.push({ genre, play: plays[index], index });
  });

  [...uniqueGenres].forEach((genre) => {
    const filteredSongs = songs.filter((song) => song.genre === genre);
    sortedSongs.push(
      filteredSongs.sort((prevSong, nextSong) => {
        if (nextSong.play === prevSong.play)
          return prevSong.index - nextSong.index;
        return nextSong.play - prevSong.play;
      })
    );
  });

  const sum = (arr) => arr.reduce((acc, cur) => acc + cur.play, 0);
  sortedSongs.sort((prevGenre, nextGenre) => sum(nextGenre) - sum(prevGenre));

  sortedSongs.forEach((genreArr) => {
    best.push(...genreArr.slice(0, 2).map((song) => song.index));
  });

  return best;
}

console.time("operation time");
const g = ["classic", "pop", "classic", "classic", "pop"];
const p = [500, 600, 150, 800, 2500];
console.log(solution(g, p));
console.timeEnd("operation time");
