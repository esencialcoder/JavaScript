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

//  TODO generar selección de cartas de forma aleatoria
//  TODO mostrarla por pantalla hasta que quede solucionado el juego
//  TODO una vez terminado el juego, se mostrarán algunas estadísticaa
//  TODO intentaremos añadir un poco de inteligencia par que el juego sea más listo

function printHeading(text) {
  const pad = "=".repeat(text.length);
  console.log(`=========${pad}==========`);
  console.log(`========= ${text} ========`);
  console.log(`=========${pad}==========`);
}

function printLine(text) {
  console.log(text);
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function printBoard(board, discovered = false) {
  for (let i = 0; i < ROWS; i++) {
    //let line = ''
    let line = [];
    for (let j = 0; j < COLUMS; j++) {
      // line += line + ' '
      // nos permite almacenar in line la carta cubierta o descubierta
      const card = board[i * COLUMS + j];
      if (discovered || card.discovered) {
        line.push(card.figure);
      } else {
        line.push(COVERED_CARD);
      }
      //line += board[i * COLUMS + j]// equivalente a line = line += ' '
    }
    //console.log(line);
    // "\t" es un tabulador
    // "\n" es un salto de línea
    console.log(line.join("\t")); // Array.join convierte a String. String.split(serparador) genera un array a partir de String
  }
}

// ---------- preparación del juego

// ✅generar figuras
// TODO mostrar el tablero inicial
// filas del tablero
const ROWS = 3;
// columnas del tablero
const COLUMS = 2;
// figuras disponibles para las cartas
const FIGURES = ["🤓", "🍉", "💚"];
const COVERED_CARD = "🃏";
printHeading("Aviable figures");
console.log(FIGURES);
const game = {
  // contador de rondas
  rounds: 0,
  // ✅mostrar tablero
  board: [],
  //nos sirve para gestionar la selección de cartas
  aviableIndexes: [],
  //setupGame nos permite configurar el juego
  setupGame: function (figures) {
    for (let figure of figures) {
      // TODO se puede mejorar teniendo en cuenta que podríamos jugar con tríos de cartas o cuartetos, etc
      for (let i = 0; i < 2; i++) {
        const card = {
          figure,
          discovered: false,
        };
        this.board.push(card);
      };
    };
    this.aviableIndexes = this.board.map((e, index) => index);
  },
  pickSetOfCardsIndexesRamdomly() {
    let cardsIndexes = [];
    // elegir cartas
    for (let i = 0; i < 2; i++) {
      //mezclamos
      shuffle(this.aviableIndexes);
      // cogemos una carta del tablero
      const cardIndex = this.aviableIndexes.pop();
      // la ponemos en una lista de cartas seleccionadas
      cardsIndexes.push(cardIndex);
    }
    return cardsIndexes;
  },
  // descubrir cartas
  discoverPickedCards(cardIndexes) {
    cardIndexes.forEach((cardIndex) => {
      const card = this.board[cardIndex];
      card.discovered = true;
    });
  },
};
// ✅generar cartas con las figuras disponibles
game.setupGame(FIGURES);
printHeading("the board");

// ✅mezclar las cartas
game.board = shuffle(game.board);

// ✅mostrar las cartas dispuestas en filas y columnas
printBoard(game.board);

// ---------- comienza el juego

// ✅mostrar las cartas cubiertas en filas y columnas
printHeading("The memory game Start");
printBoard(game.board);
// 🟩mientras no haya terminado el juego
// ✅mostrar la ronda en la que estamos
printLine(`Playing round #${game.rounds}`);
// ✅seleccionar un par de cartas cubiertas al azar
let cardsIndexesSelected = game.pickSetOfCardsIndexesRamdomly();
printBoard(game.board, true);
// ✅mostrar los índices de estas cartas seleccionadas
printLine(`Selected cards indexes: ${cardsIndexesSelected}`);
// ✅mostrar las cartas seleccionadas en el tablero
game.discoverPickedCards(cardsIndexesSelected);
printBoard(game.board);
// 🟩si son las mismas figura
  // 🟩mantenemos las cartas descubierta
// 🟩si no son la misma figura
  // 🟩volverlas a cubrir
// 🟩incrementar la ronda

// --------- una vez terminado el juego
// 🟩mostrar que ha terminado el juego diciendo cuántas rondas hemos necesitado
