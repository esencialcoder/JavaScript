// ✅filas
// cartas (repetidas, iguales...)
// ✅columnas
// jugador
// puntuación (si las cartas son iguales)
// contadores
// turnos
// ✅figuras
// mensajes
// celdas vacías
// simular cartas seleccionadas

let board = [];
// por cada fila
// for (let i = 0; i < ROWS; i++) {
//   // una fila cualquiera
//   let row = [];
//   //por cada columna
//   for (let j = 0; j < COLUMS; j++) {
//     // console.log(j,i)
//     row[j] = FIGURES[i];
//   }
//   board[i] = row;
// }

// for(let i = 0; i < ROWS * COLUMS / 2; i++) { // 3 * 2 / 2 === 3, la misma dimensión que FIGURES.lenght
//   for(let j = 0; j < 2; j++){ // por cada figura, insertamos dos veces en el mazo
//     board.push(FIGURES[i]) // si solamente queremos añadir elementos al array, lo hacemos con Array.push
//   }
// }

// for (let i = 0; i < ROWS; i++) {
//   console.log(board[i]);
// }

//  TODO generar selección de cartas de forma aleatoria
//  TODO mostrarla por pantalla hasta que quede solucionado el juego
//  TODO una vez terminado el juego, se mostrarán algunas estadísticaa
//  TODO intentaremos añadir un poco de inteligencia par que el juego sea más listo
    
// ---------- preparación del juego 

// ✅generar figuras
// TODO mostrar el tablero inicial
// filas del tablero
const ROWS = 3;
// columnas del tablero
const COLUMS = 2;
// figuras disponibles para las cartas
const FIGURES = ["🤓", "🍉", "💚"];
const COVERED_CARD = '🃏';
printHeading('Aviable figures')
console.log(FIGURES);
function printHeading(text){
  const pad = '='.repeat(text.length)
  console.log(`=========${pad}==========`)
  console.log(`========= ${text} ========`)
  console.log(`=========${pad}==========`)
}
// ✅generar cartas con las figuras disponibles
for(let figure of FIGURES){
  // TODO se puede mejorar teniendo en cuenta qeu podríamos jugar con tríos de cartas o cuartetos, etc
  const card = {figure}
  board.push(card)
  board.push(card)
}
printHeading('the board');

// ✅mezclar las cartas
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
// una función que nos permite ramdomizar los elementos de un array
board = shuffle (board);

// ✅mostrar las cartas dispuestas en filas y columnas
// función que nos sirve para poder mostrar por pantalla las cartas en filas y columnas
function printBoard(board, discovered = false) {
  for(let i = 0; i < ROWS; i++){
    //let line = ''
    let line = []
    for(let j = 0; j < COLUMS; j++) {
      // line += line + ' '
      // nos permite almacenar in line la carta cubierta o descubierta
      if (discovered){
          const card = board[i * COLUMS +j]
          line.push(card.figure);
      }else{
        line.push(COVERED_CARD);
      }
      //line += board[i * COLUMS + j]// equivalente a line = line += ' '
    }
    //console.log(line);
    // "\t" es un tabulador
    // "\n" es un salto de línea
    console.log(line.join('\t')); // Array.join convierte a String. String.split(serparador) genera un array a partir de String
  }
}
// Función que me muestra las cartas tapadas en el tablero
// function printBoardWithCoveredCards(board){
//   for(let i = 0; i < ROWS; i++){
//     //let line = ''
//     let line = []
//     for(let j = 0; j < COLUMS; j++) {
//       // line += line + ' '
//       const card = board[i * COLUMS +j]
//       line.push(COVERED_CARD);
//       //line += board[i * COLUMS + j]// equivalente a line = line += ' '
//     }
//     //console.log(line);
//     // "\t" es un tabulador
//     // "\n" es un salto de línea
//     console.log(line.join('\t')); // Array.join convierte a String. String.split(serparador) genera un array a partir de String
printBoard(board, true);
// ---------- comienza el juego
// ✅mostrar las cartas cubiertas en filas y columnas
printHeading('The memory game Start');
printBoard(board);
// 🟩mientras no haya terminado el juego
    // 🟩mostrar la ronda en la que estamos
    // 🟩seleccionar un par de cartas cubiertas al azar
    // 🟩mostrar los índices de estas cartas seleccionadas
    // 🟩mostrar las cartas seleccionadas en el tablero
    // 🟩si son las mismas figura
        // 🟩mantenemos las cartas descubierta
    // 🟩si no son la misma figura
        // 🟩volverlas a cubrir
        // 🟩incrementar la ronda

// --------- una vez terminado el juego
// 🟩mostrar que ha terminado el juego diciendo cuántas rondas hemos necesitado
