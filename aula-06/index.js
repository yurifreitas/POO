// Classe Cliente
class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

// Classe base Conta
class Conta {
    #saldo;

    constructor(cliente, numero) {
        this.cliente = cliente;
        this.numero = numero;
        this.#saldo = 0;
    }

    getSaldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return valor;
        }
        return 0;
    }
}

// Classe ContaCorrente que estende Conta
class ContaCorrente extends Conta {
    constructor(cliente, numero) {
        super(cliente, numero); // Chama o construtor da classe base (Conta)
    }

    // Métodos específicos de ContaCorrente podem ser adicionados aqui
}

// Classe ContaPoupanca que estende Conta
class ContaPoupanca extends Conta {
    constructor(cliente, numero) {
        super(cliente, numero); // Chama o construtor da classe base (Conta)
    }

    // Métodos específicos de ContaPoupanca podem ser adicionados aqui
}

// Uso das classes
let cliente = new Cliente("João", "12345678900");
let contaCorrente = new ContaCorrente(cliente, "1234");
let contaPoupanca = new ContaPoupanca(cliente, "5678");

// Operações
contaCorrente.depositar(1000);
contaCorrente.sacar(500);
contaPoupanca.depositar(2000);

console.log(contaCorrente.getSaldo()); // Saída: 500
console.log(contaPoupanca.getSaldo()); // Saída: 2000
