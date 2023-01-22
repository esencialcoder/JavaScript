console.log("B", "N", "B", "N", "B", "N", "B", "N");
console.log("N", "B", "N", "B", "N", "B", "N", "B");
console.log("B", "N", "B", "N", "B", "N", "B", "N");
console.log("N", "B", "N", "B", "N", "B", "N", "B");
console.log("B", "N", "B", "N", "B", "N", "B", "N");
console.log("N", "B", "N", "B", "N", "B", "N", "B");
console.log("B", "N", "B", "N", "B", "N", "B", "N");
console.log("N", "B", "N", "B", "N", "B", "N", "B");

console.log();
console.log();
console.log();
console.log();
console.log("B N B N B N B N");
console.log("N B N B N B N B");
console.log("B N B N B N B N");
console.log("N B N B N B N B");
console.log("B N B N B N B N");
console.log("N B N B N B N B");
console.log("B N B N B N B N");
console.log("N B N B N B N B");

const oddRow = "B N B N B N B N";
const evenRow = "N B N B N B N B";

console.log();
console.log();
console.log();
console.log();

// una forma de crear la tabla por bucles o repeticiones
for (i = 0; i < 8; i++) {
  // para un índice par
  if (i % 2 === 0) {
    console.log(oddRow);
  } else {
    // para un índice impar
    console.log(evenRow);
  }
}
// otra forma de crear la tabla por bucle o repetición
for (i = 0; i < 4; i++) {
  console.log(oddRow);
  console.log(evenRow);
}

console.log();
console.log();
console.log();
console.log();

// otra nueva forma de crear la tabla por bucle o por repetición
const B = "B";
const N = "N";

// otra forma de crear la tabla por bucle o por repetición
console.log('Initial board');
for (let i = 0; i < 8; i++) {
    let fila = '' // esto es diferente de undefined, de null y de 0.
  for (let j = 0; j < 8; j++) {
    if ((j + i) % 2 === 0) {
      fila += B + ' ';
    } else {
      fila += N + ' ';
    }
  }

  console.log(fila)
}
