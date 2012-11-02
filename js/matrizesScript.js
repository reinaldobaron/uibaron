$(document).ready(function() {

var armazena_nomes = new Array();
$("li:first-child").each(function(){
		nome = $(this).text();
		armazena_nomes.push(nome);
});

console.log(armazena_nomes);

//var filtra_sexo = $.grep(armazena_nomes, function(n) {
//			var Regex = new RegExp('[a]$', 'g');
//			var teste =  n.match(Regex);
//			return teste;
//			});
//
//console.log(filtra_sexo);
	
var altera_nomes = $.map(armazena_nomes,function(n){
			var Regex = new RegExp('[a]$', 'g');
			var teste =  n.match(Regex);
			return n + " (M)"
			});
			
console.log(altera_nomes);


$("#btn_filtra_mulheres").on("click", function(){
	$('#resultado').html( '<p>' + armazena_nomes.join('</p><p>') + '</p>' );
});

$("#btn_altera_nomes").on("click", function(){
	$('#resultado').html( '<p>' + altera_nomes.join('</p><p>') + '</p>' );
});


//var arr = ['hand', 'arm', 'body', 'eye', 'head', 'foot'];
//arr = $.grep(arr, function(val, index) {
//	return val.indexOf('h') === 0;
//});
//
//console.log(arr);

});