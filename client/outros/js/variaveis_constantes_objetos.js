/*
Desenvolvedor: Baron
Descrição: Estudo de operadores
Última atualização : 14/10/2012
*/

// Variáveis: tipos de dados primitivos
var sobreNome = "Baron"; // string
var idade = 28; // number
var superiorCompleto = true; // boolean

var nome; // undefined
var experienciaProfissional = null; //null
experienciaProfissional = 8 * "anos"; // NaN

//alert(nome);
//alert(experienciaProfissional);
//alert(sobreNome + ", " + idade + ", " + superiorCompleto  );

//Scape de caracteres strings
var titulo = "Operadores... \n\"Matemáticos\" \"Comparação\" \"Lógicos\" \"Atribuição\""; 
//alert(titulo);


// Contantes: o valor de uma constante nunca se altera
const DIAS_DA_SEMANA = 7;
//alert(DIAS_DA_SEMANA);

// Objetos: possuem propriedades e métodos


// Objetos Internos (string, date, number)
// Objetos do browser (window, document)
var larguraJanela = window.innerWidth;
var alturaJanela = window.innerHeight;
var areaUtil = larguraJanela + " x " + alturaJanela;
window.alert(areaUtil);
// Objetos personalizados (criados pelo desenvolvedor)
/*
	Veiculo
	   tipo, marca, modelo, cor
	   acelerar(); freiar(); abastecer(); abrirPorta(); fecharPorta();
*/

/*acessando propriedades e métodos
	Veiculo.tipo
	Veiculo.marca
	Veiculo.acelerar();
	Veiculo.freiar();
*/
	