// Classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("Voce nao deveria instanciar um objeto do tipo Conta, pois essa é um classe Abstrata ");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() { return this._cliente; }
    get saldo() { return this._saldo; }

    //Metodo abstrato
    sacar(valor) { throw new Error("O método Sacar da conta é abstrato") }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) { return; }

        this._saldo += valor;
        // console.log(this.#saldo) aqui voce consegue acessar essa parametro privado da classe
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


}