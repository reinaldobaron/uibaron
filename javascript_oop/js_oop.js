var Pessoa = function ( a,b,c,d ) {
	this.cpf = a;
	this.nome = b;
	this.idade = c;
	this.cargo = d;
}

Pessoa.prototype.validarCPF = function () {
	console.log("CPF: " , this.cpf);
}

Pessoa.prototype.exibirNome = function () {
	console.log("Nome: " , this.nome, " " + this.cpf);
}

Pessoa.prototype.exibirCargo = function () {
	console.log("Cargo: " , this.cargo);
}


var michel = new Pessoa("999.999.999-99", "Salim Michel", 35, "Gerente de Desenvolvimento" );

michel.exibirNome();
michel.validarCPF();
michel.exibirCargo();

var felipe = new Pessoa("999.999.999-99", "Felipe Santana", 35, "Estagiário" );

felipe.exibirNome();
felipe.exibirCargo();
