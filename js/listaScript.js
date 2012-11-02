$(document).ready(function() {
	$("#link1").on("click", function(event){
		textoItem("select1");
	});
	$("#link2").on("click", function(event){
		valorItem("select1");
	});
	$("#link3").on("click", function(event){
		quantidadeItem("select1");
	});
	$("#link4").on("click", function(event){
		removerItem("select1");
	});
	$("#link5").on("click", function(event){
		adicionarItem("select1", "www.projetandoux.com.br", "Projetando UX", "bold");
	});
	$("#link6").on("click", function(event){
		posicionarItem("select1", "up");
	});
	$("#link7").on("click", function(event){
		posicionarItem("select1", "down");
	});
	$("#link8").on("click", function(event){
		moverItem("select1", "select2");
	});
	$("#link9").on("click", function(event){
		moverItem("select2", "select1");
	});
});

//Obtendo o texto do item selecionado
function textoItem(select) {
	$("#"+select+" option:selected").each(function() {
		alert($(this).text());
	});
}
//Obtendo o valor do item selecionado
function valorItem(select) {
	$("#"+select+" option:selected").each(function() {
		alert($(this).val());
	});
}
//Obtendo a quantidade de itens
function quantidadeItem(select) {
	alert($("#"+select+" option").length);
}
//Removendo o(s) ite(ns)m selecionado(s)
function removerItem(select) {
	$("#"+select+" option:selected").remove();
}
//Adicionando ite(ns)m selecionado(s)
function adicionarItem(select, val, texto, cla) {
	$("#"+select).append("<option value='"+val+"' class='"+cla+"'>"+texto+"</option>");
}
//Movendo itens
function moverItem(de, para) {
	$("#"+de+" option:selected").each(function() {
		adicionarItem(para, $(this).val(), $(this).text(), $(this).attr("class"));
		$(this).remove();
	});
}

//Posicionando o(s) ite(ns)m selecionado(s)
function posicionarItem(select, direcao) {
	$("#"+select+" option:selected").each(function() {
		if (direcao == "up") {
			var val = $(this).prev().val();
			var tex = $(this).prev().text();
			var cla = $(this).prev().attr("class");
			$(this).prev().remove();
			if (val && tex) {
				$(this).after("<option value='"+val+"' class='"+cla+"'>"+tex+"</option>");
			}
		} else if (direcao == "down") {
			var val = $(this).next().val();
			var tex = $(this).next().text();
			var cla = $(this).next().attr("class");
			$(this).next().remove();
			if (val && tex) {
				$(this).before("<option value='"+val+"' class='"+cla+"'>"+tex+"</option>");
			}
		}
	});
}