class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    mostra(){
        console.log(`o veiculo possui marca ${this.marca} model ${this.marca} ano ${this.ano}  `)
    }
}
const carro = new Carro('toyota','SWV','2011');

carro.mostra()