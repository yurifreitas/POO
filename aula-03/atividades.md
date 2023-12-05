Exercício 1: Crie um objeto literal representando um carro com os seguintes atributos: marca, modelo, ano e cor.

```jsx
// Exercício 1
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata"
};

```

Exercício 2: Crie um objeto literal representando um círculo com os atributos raio e calcularÁrea (um método que calcula a área do círculo).

```jsx
// Exercício 2
const circulo = {
  raio: 5,
  calcularÁrea: function () {
    return Math.PI * this.raio * this.raio;
  }
};
console.log("Área do círculo:", circulo.calcularÁrea());

```

Exercício 3: Crie um objeto chamado "aluno" com os atributos nome, idade e um método chamado "mostrarInformacoes" que imprime os dados do aluno.

```jsx
// Exercício 3
const aluno = {
  nome: "Maria",
  idade: 25,
  mostrarInformacoes: function () {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
};

aluno.mostrarInformacoes();

```

Exercício 4: Crie um objeto chamado "livro" com os atributos título, autor e um método chamado "detalhes" que imprime os detalhes do livro.

```jsx
// Exercício 4
const livro = {
  título: "Aventuras de Sherlock Holmes",
  autor: "Arthur Conan Doyle",
  detalhes: function () {
    console.log(`Título: ${this.título}, Autor: ${this.autor}`);
  }
};

livro.detalhes();

```

Exercício 5: Crie uma classe chamada "Retângulo" com os atributos "largura" e "altura" e um método chamado "calcularÁrea" que retorna a área do retângulo.

```jsx
// Exercício 5
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

```
