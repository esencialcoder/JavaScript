const funct = require("./function");
const board = require("./board");

// Contador de rondas
let countRoundA = 0;
let countRoundB = 0;

// Lista de disparos efectuados
let listshootA = [];
let listshootB = [];

// Numero de disparos efectuados por Jugador
let numShootA = 0;
let numShootB = 0;

// Numero de disparos disponibless
let numberShootA = 100;
let numberShootB = 100;

// Control de turno de juego
let turnPlayer = "A";

// Vidas de cada barco por jugador
let liveA = {
	portaaviones1 : 5,
	buque1 : 4, 
	submarino1 : 3, 
	submarino2 : 3, 
	crucero1: 2,        
	crucero2: 2,
	crucero3: 2,
	lancha1 : 1,
	lancha2 : 1,
	lancha3 : 1,
}

let liveB = {
	portaaviones1 : 5,
	buque1 : 4, 
	submarino1 : 3, 
	submarino2 : 3, 
	crucero1: 2,        
	crucero2: 2,
	crucero3: 2,
	lancha1 : 1,
	lancha2 : 1,
	lancha3 : 1,
}

const totalPoint = 24 

// Lista de barcos (todos)
let listTouchedA = []
let listTouchedB = []

// DONE Cada jugador dispondrá de dos tableros; el suyo y el del adversario. Jugarán por turnos en rondas alternativas. Si un jugador dispara y alcanza al agua, pasará turno al siguiente jugador y así sucesivamente. En caso de tocar un barco enemigo, continuará disparando hasta hundirlo o hasta fallar sin haberlo hundido. Ganará el jugador que primero consiga hundir todos los barcos del enemigo
		// ✅Habrá un contador de turnos que se autoincrementará en cada turno y se mostrará por pantalla
		// ✅Habrá un contador de disparos que se autoincrementará en cada disparo y se mostrará por pantalla
		// ✅Se avisará cuando un barco haya sido tocado, hundido o, cuando el disparo caiga en el agua
		// ✅Se jugará hasta que se den las condiciones de finalización de partida y se mostrará el ganador

function startGame(Player1,positions_P1,Player2,positions_P2){
	location_P1 = SearchLocation(Player1);
	location_P2 = SearchLocation(Player2);
	while(numberShootA>numShootA || numberShootB>numShootB  ){
		// Comienza el juego con el jugador A. Se inicia el contador de rondas y de disparo
		if (turnPlayer == "A" && numberShootA>numShootA ){ 
			console.log(`Round ${countRoundA} for ${turnPlayer}`);
			console.log("=============");
			// Se comienza encontrando la posición de disparo
			const position = funct.Buscar_Posicion_Inicial(listshootA);
			shootPoint =  String(position[0]) + String(position[1]);
			listshootA.push(shootPoint);
			// Se evalúan tipos de disparos, tipo de navío, tamaño del navío, posición
			const checkValue = checkShoot(shootPoint,liveB,positions_P2,location_P2,Player1);
			const typeShoot = checkValue[0];
			const nameBoat = checkValue[1];
			const iconBoat = () => {
				// Si encuentra un portaavión, lo retornará
				if (nameBoat=="portaaviones1"){
					return "🚢";
					// Si es un buque, lo retornará
				} else if (nameBoat=="buque1"){
					return "⛴ ";
						// Si es un submarino, lo retornará
				} else if (nameBoat=="submarino1" || nameBoat=="submarino2"){
					return "⛵";
							// Si es un crucero, lo retornará
				} else if (nameBoat=="crucero1" || nameBoat=="crucero2" || nameBoat=="crucero3"){
					return "🚤";
								// Si es lancha, lo retornará
				} else if (nameBoat=="lancha1" || nameBoat=="lancha2" || nameBoat=="lancha3"){
					return "🛶";
				};
			};
			// Si es hundido, mostrará los parámetros de los contadores y, además, anunciará "Sunken ship!"
			if (typeShoot=="💥"){
				console.log(`Shoot #${numShootA} to row(${String(position[0])}) column(${String(position[1])}): ${typeShoot} Sunken ship! ${iconBoat()}`);
				// Si es tocado, mostrará parámetros y anunciará "Hit ship!"
			} else if (typeShoot=="🔥") {
				console.log(`Shoot #${numShootA} to row(${String(position[0])}) column(${String(position[1])}): ${typeShoot} Hit ship! ${iconBoat()}`);
					// De lo contrario, mostrará parámetros y anunciará "No chip!". Luego pasará turno al jugador B
			} else {
				console.log(`Shoot #${numShootA} to row(${String(position[0])}) column(${String(position[1])}): ${typeShoot} No ship!`);
			};
			// Comienza turno del jugador B. Con los mismos perfiles que el jugador A
			console.log("Enemy board:");
			board.viewBoarsPlayerGameEnemy(Player1,listshootA);
			console.log("Own board:");
			board.viewBoarsPlayerGame(Player1,Player2,listshootB,positions_P1);
			console.log("");
			++numShootA;
			if (typeShoot=="💧"){                
				const changeTurnAB = changeTurn(turnPlayer,countRoundA,countRoundB)  
				turnPlayer  = changeTurnAB[0];
				countRoundA = changeTurnAB[1];
				countRoundB = changeTurnAB[2];
			}
		} else if (turnPlayer == "B" && numberShootB>numShootB){   
			console.log(`Round ${countRoundB} for ${turnPlayer}`);
			console.log("=============");
			const position = funct.Buscar_Posicion_Inicial(listshootB);
			shootPoint =  String(position[0]) + String(position[1]);
			listshootB.push(shootPoint);
			const checkValue = checkShoot(shootPoint,liveA,positions_P1,location_P1,Player2);
			const typeShoot = checkValue[0];
			const nameBoat = checkValue[1];
			const iconBoat = () => {
				if (nameBoat=="portaaviones1"){
					return "🚢";
				} else if (nameBoat=="buque1"){
					return "⛴ ";
				} else if (nameBoat=="submarino1" || nameBoat=="submarino2"){
					return "⛵";
				} else if (nameBoat=="crucero1" || nameBoat=="crucero2" || nameBoat=="crucero3"){
					return "🚤";
				} else if (nameBoat=="lancha1" || nameBoat=="lancha2" || nameBoat=="lancha3"){
					return "🛶";
				};
			};
			if (typeShoot=="💥"){
				console.log(`Shoot #${numShootB} to row(${String(position[0])}) column(${String(position[1])}): ${typeShoot} Sunken ship! ${iconBoat()}`);
			} else if (typeShoot=="🔥") {
				console.log(`Shoot #${numShootB} to row(${String(position[0])}) column(${String(position[1])}): ${typeShoot} Hit ship! ${iconBoat()}`);
			} else {
				console.log(`Shoot #${numShootB} to row(${String(position[0])}) column(${String(position[1])}): ${typeShoot} No ship!`);
			};
			console.log("Enemy board:");
			board.viewBoarsPlayerGameEnemy(Player2,listshootB);
			console.log("Own board:");
			board.viewBoarsPlayerGame(Player2,Player1,listshootA,positions_P2);
			++numShootB;
			if (typeShoot=="💧"){                
				const changeTurnAB = changeTurn(turnPlayer,countRoundA,countRoundB); 
				turnPlayer  = changeTurnAB[0];
				countRoundA = changeTurnAB[1];
				countRoundB = changeTurnAB[2];
			}
		}
		// Si cualquier jugador consume sus 100 disparos, detendrá el juego
		if (Player1.points == totalPoint || Player2.points == totalPoint){
			break;
		}
		// Se van alternando los turnos de disparos
		if (numberShootB==numShootB){
			turnPlayer = "A";
		}if (numberShootA==numShootA){
			turnPlayer = "B"; 
		}
	}
	return[listshootA,listshootB];
}

function changeTurn(turnPlayer,countRoundA,countRoundB){
	if (turnPlayer == "A"){
		++countRoundA;
		turnPlayer ="B";
	}else{
		++countRoundB;
		turnPlayer ="A";
	}
	return [turnPlayer,countRoundA,countRoundB];
}

function checkShoot(shootPoint,lives,positions,location,Player){
	let typeShoot = "💧";
	let namShipTouch;
	const element = positions.find(val => val == shootPoint)
	if (element != undefined){ 
		typeShoot = "🔥";
		++Player.points;
		namShipTouch = location[shootPoint];
		--lives[namShipTouch];
		if  (lives[namShipTouch]== 0){
			typeShoot = "💥";
			for (let keyValue of Object.entries(location)){
				if (keyValue[1] == namShipTouch){
					Player.shooter[keyValue[0]] = typeShoot;
				};
			};
		} else {
			Player.shooter[shootPoint] = typeShoot;
		};  
	} else {
		Player.shooter[shootPoint] = typeShoot;
	};
	return [typeShoot, namShipTouch];
};

function SearchLocation(Player){
	let locationDic = {};
	for (let key of Object.keys(Player.ships)){
		const ship = Player.ships[key];    
		let position_ship = ship.location;
		for(let i = 0; i < ship.location.length; i++) {
			locationDic[position_ship[i]] = ship.name;
		};
	};
	return locationDic;
}

module.exports = { startGame: startGame };
