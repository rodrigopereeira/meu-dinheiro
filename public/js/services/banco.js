angular.module('meudinheiro').factory('banco', function() {

    var gastos = [{
        id: 1,
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
        value: 56.00
    }, {
        id: 2,
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
        value: 700.00
    }, {
        id: 3,
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
        value: 600.00
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
        gastos.push(conta);
    }

    return {
        adicionaConta: adicionaConta,
        getContas: getContas,
        getTiposGasto: getTiposGasto,
        getGastos: getGastos
    };
})
