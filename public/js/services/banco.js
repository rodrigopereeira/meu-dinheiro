angular.module('meudinheiro').factory('banco', function() {

    var gastos = [{
        id: 1,
        tipoConta: {
          id: 1,
          description: "Pagar"
        },
        conta: {
            id: 1,
            description: "Santander"
        },
        tipogasto: {
            id: 1,
            description: "Alimentação"
        },
        description: "Compras no Mercado",
        pay: false,
        value: 56.00,
        data: new Date()
    }, {
        id: 2,
        tipoConta: {
          id: 1,
          description: "Pagar"
        },
        conta: {
            id: 2,
            description: "Nubank"
        },
        tipogasto: {
            id: 2,
            description: "Educação"
        },
        description: "Faculdade",
        pay: false,
        value: 700.00,
        data: new Date()
    }, {
        id: 3,
        tipoConta: {
          id: 1,
          description: "Pagar"
        },
        conta: {
            id: 3,
            description: "Banco do Brasil"
        },
        tipogasto: {
            id: 3,
            description: "Aluguel"
        },
        description: "Aluguel",
        pay: true,
        value: 600.00,
        data: new Date()
    }, {
        id: 4,
        tipoConta: {
          id: 1,
          description: "Pagar"
        },
        conta: {
            id: 3,
            description: "Banco do Brasil"
        },
        tipogasto: {
            id: 4,
            description: "Transporte"
        },
        description: "Gasolina",
        pay: true,
        value: 12.00,
        data: new Date()
    }, {
        id: 5,
        tipoConta: {
          id: 1,
          description: "Pagar"
        },
        conta: {
            id: 3,
            description: "Banco do Brasil"
        },
        tipogasto: {
            id: 2,
            description: "Educação"
        },
        description: "Faculdade",
        pay: true,
        value: 750.00,
        data: new Date()
    }, {
        id: 6,
        tipoConta: {
          id: 1,
          description: "Pagar"
        },
        conta: {
            id: 3,
            description: "Banco do Brasil"
        },
        tipogasto: {
            id: 5,
            description: "Outros"
        },
        description: "Mi Band 2",
        pay: true,
        value: 18.00,
        data: new Date()
    }];

    var contas = [{
        id: 1,
        description: "Santander"
    }, {
        id: 2,
        description: "Nubank"
    }, {
        id: 3,
        description: "Banco do Brasil"
    }];

    var tiposGasto = [{
        id: 1,
        description: "Alimentação"
    }, {
        id: 2,
        description: "Educação"
    }, {
        id: 3,
        description: "Aluguel"
    }, {
        id: 4,
        description: "Transporte"
    }, {
        id: 5,
        description: "Outros"
    }];

    var tipoConta = [{
        id: 1,
        description: "Pagar"
    }, {
        id: 2,
        description: "Receber"
    }, ];


    var getContas = function() {
        return contas;
    }

    var adicionaConta = function(conta) {
        contas.push(conta);
    }

    var getTiposGasto = function() {
        return tiposGasto;
    }

    var getGastos = function() {
        return gastos;
    }

    var adicionaGasto = function(gasto) {
        gastos.push(gasto);
    }

    var getTipoConta = function() {
        return tipoConta;
    }

    return {
        adicionaConta: adicionaConta,
        getContas: getContas,
        getTiposGasto: getTiposGasto,
        adicionaGasto:adicionaGasto,
        getGastos: getGastos,
        getTipoConta: getTipoConta
    };
})
