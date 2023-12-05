const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
  };

  const circulo = {
    raio: 5,
    calcularÁrea: function () {
      return Math.PI * this.raio * this.raio;
    }
  };
  console.log("Área do círculo:", circulo.calcularÁrea());
  

  const aluno = {
    nome: "Maria",
    idade: 25,
    mostrarInformacoes: function () {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
  };
  const livro = {
    título: "Aventuras de Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    detalhes: function () {
      console.log(`Título: ${this.título}, Autor: ${this.autor}`);
    }
  };
  
  livro.detalhes();
  class Retângulo {
    constructor(largura, altura) {
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularÁrea() {
      return this.largura * this.altura;
    }
  }
  
  const retângulo1 = new Retângulo(8, 6);
  console.log("Área do retângulo:", retângulo1.calcularÁrea());
  