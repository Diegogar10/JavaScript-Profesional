/* console.log('Hello, TypeScript')

function add(a:number, b:number){
  return a+b;
}

const sum=add(5,8); */

//Boolean 
let muted: boolean = true;
muted = false;

//Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador/denominador;

//String
let nombre: string = 'Richard';
let saludo =`Me llamo ${nombre}`;

//Arreglos

let people: string[] = [];
people = ['Isabel','Nicole','Raul'];
//people.push(9000)  --- esto seria un error por el tipo de elemento ingresado
people.push('9000');

//Arreglos combinados

let peoplesandnumbers: Array<string|number> = [];
peoplesandnumbers.push('Diego')
peoplesandnumbers.push(28)

//Enum

enum Color{
  Rojo = 'Rojo',
  verde = 'Verde',
  Azul = 'Azul'
}

let colorFavorito: Color = Color.Azul;
console.log(`mi Color favorito es ${colorFavorito}`);

//Any

let comodin: any = "Joker"
comodin = {type: "Wildcard"};

//Object

let someObject: Object = {type: 'Wildcard'};

//Funciones 
function add(a:number, b:number): number{
  return a+b;
}

const suma = add(5,25)

//
function createAdder(a:number):(number)=>number{
  return function(b:number){
    return a+b;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//valor no requerida
function fullName(firstName: string, lastName?:string):string{
  return `${firstName} ${lastName}`;
}

const richard = fullName('Richard');

//valor por defecto
function fullNameDefault(firstName: string, lastName:string = 'Smith'):string{
  return `${firstName} ${lastName}`;
}

const agente = fullName('Agente');

//Intarface

interface Rectangulo{
  ancho:number;
  alto:number;
}

let rect: Rectangulo ={
  ancho:4,
  alto:6,
}

function area(r:Rectangulo){
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());

