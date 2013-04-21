/*
Desenvolvedor: Baron
Descrição: JavaScript e Ajax (Script de Compatibilidade)
Última atualização : 11/02/2013
*/

var requisicao;
if (window.XMLHttpRequest) {
	requisicao = new XMLHttpRequest();
} else {
	requisicao = new ActiveXObject("Microsoft.XMLHTTP");
}

requisicao.open("GET", "data.txt");

requisicao.onreadystatechange = function() {
	if ((requisicao.readyState===4) && (requisicao.status===200)) {
		console.log(requisicao);
		document.writeln(requisicao.responseText);
	}
}
requisicao.send();

