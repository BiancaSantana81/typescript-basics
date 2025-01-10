/*
 * Não é obrigatório em TypeScript, mas ajuda o compilador a identificar qual o tipo de variável usada e a lidar com erros.
 * 
 * Sintaxe:
 * 
 * let [nome da variável]: [tipo variável] = [valor];
 * let name: string = "Bianca";
 */

// array

let animals: string[] = ["dog", "cat", "monkey"];
console.log(animals);

// objeto

let person: {
    name: string;
    age: number;
    sign: string
};

person = {name: "Bianca", age: 27, sign: "pisces"};
console.log(person);


// função

function multiplyValues(numb1: number, numb2: number) {
    return (numb1 * numb2);
}

console.log(multiplyValues(5, 10));

// Boolean ≠ boolean -> o primeiro é object e o segundo é um tipo primitivo e que deve ser usado

let taskcompleted: boolean = false;
let pendingtask: boolean = true;

console.log(taskcompleted);
console.log(pendingtask);