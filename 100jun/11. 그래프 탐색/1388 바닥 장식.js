const read = `7 8
--------
|------|
||----||
|||--|||
||----||
|------|
--------`;

const input = read.toString().trim().split('\n');

class floor_decoration {
  constructor() {
    this.value = [];
    this.N = 0;
    this.M = 0;
    this.parsing = (input) => {
      const [N, M] = input.shift().split(' ').map(Number);
      this.N = N;
      this.M = M;
      this.value = input;
    };
    this.solution = () => {
      let w = 0,
        h = 0;

      for (let i = 0; i < this.N; i++) {
        let str = '';
        for (let j = 0; j < this.M; j++) {
          str += this.value[i][j];
        }
        let len = 0;
        const res = str.split('|');
        res.forEach((element) => {
          if (element !== '') len++;
        });
        w += len;
      }

      for (let i = 0; i < this.M; i++) {
        let str = '';
        for (let j = 0; j < this.N; j++) {
          str += this.value[j][i];
        }
        let len = 0;
        const res = str.split('-');
        res.forEach((element) => {
          if (element !== '') len++;
        });
        h += len;
      }

      console.log(w + h);
    };
  }
}

const fd = new floor_decoration();
fd.parsing(input);
fd.solution();
