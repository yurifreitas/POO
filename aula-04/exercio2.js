class Pessoa{
    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
    mostra(){
        console.log(`A pessoa tem nome ${this.nome} idade ${this.idade} cidade ${this.cidade}  `)
    }
}
const pessoa = new Pessoa('Maria','16','Torres');

pessoa.mostra()