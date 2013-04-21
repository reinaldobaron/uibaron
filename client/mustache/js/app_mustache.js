    var artigo = {
    'titulo': 'Templates client-side com Mustache.js',
    'likes': 32,
    'tweets': 22,
    'comentarios': 45,
    'buzz': function () {
    return this.likes + this.tweets + this.comentarios;
    }
    },
    output = Mustache.render('<h1>{{titulo}} <small>{{buzz}}</small></h1>', artigo);
    console.log(output);