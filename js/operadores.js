/*
Desenvolvedor: Baron
Descrição: Estudo de Operadores
Última atualização : 14/10/2012
*/

//OPERADORES MATEMATICOS (+, -, /, *, %)

// Operador Unário "+" positivo, "-" negativo
//alert(-5); // - operador, 5 operando
var v = -(-5); // convertendo um número negativo para positivo
alert("Teste unário - v = " + v);

// Operador Binário
//alert(5 + 5); // 5 operando, + operador, 5 operando
var x = 5 + 5;
alert("x = " + x);

//Convertendo string em number
var y = 5 * "2"; // ao utilizar o sinais "/", "*", "-", "%"  a string será convertida para number automáticamente
alert("Teste binário - y = "+  y);

//Operador ternário
var censura = prompt("Quantos anos voce tem?");
var regraCensura = (censura >= 16) ? "Aproveite o filme!" : "Não recomendado para menores de 16 anos";
alert(regraCensura);


//Precedencia
//var z = 9 - 6 + 3 * 3;
var z = (9 - 6 + 3) * 3; //retorna 18
alert("Teste precedencia - z = " + z);



//OPERADORES DE COMPARACAO (==, === valor e tipo, != diferente, !== identidade diferente, >, <, >=, <=)
var w = 10;
//alert(typeof(w));
alert("Teste comparacao - " + (w === "10") );

//OPERADORES LOGICOS (&& AND, || OR, ! NOT)
var a = 2;

alert( !(a > 1));
alert( a > 1 && a < 3 );

//OPERADORES ATRIBUICAO (+=, -=, /=, *=, %=)
var b = 2;
b += 4;
alert("Teste atribuicao\n" + b);