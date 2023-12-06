class ContaBancaria{
    
    constructor(nome_titular, saldo, número_conta){
        this.nome_titular = nome_titular;
        this.saldo = saldo;
        this.número_conta = número_conta;
    }
    mostra(){
        console.log(`A ContaBancaria tem nome_titular ${this.nome_titular} saldo ${this.saldo} número_conta ${this.número_conta}  `)
    }
}
const contaBancaria = new ContaBancaria('Maria',16.666,undefined);

contaBancaria.mostra()