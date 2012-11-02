/*
Desenvolvedor: Baron
Descrição: Estudo de operadores
Última atualização : 14/10/2012
*/

function calcularIMC () {
	var formulario = document.getElementById("formIMC");
	
	var peso = +formulario.peso.value; // + antes para converter em number
	var metros = +formulario.metros.value;
	var centimetros = +formulario.cm.value;
	
	var altura = (metros * 100 + centimetros) / 100;
	var imc = peso / (altura * altura);
	
	formulario.imc.value = imc.toFixed(2);
	
}