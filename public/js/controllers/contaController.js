angular.module('meudinheiro').controller('contaController', function($scope, banco) {

    $scope.today = 'Hoje';
    $scope.clear = 'Limpar';
    $scope.close = 'Fechar';

    $scope.conta = {};

    $scope.filtraPagar = function (gasto) {
        return gasto.tipoConta.id == 1;
    };

    $scope.filtraReceber = function (gasto) {
        return gasto.tipoConta.id == 2;
    };

    $scope.tipoGasto = banco.getTiposGasto();
    $scope.tipoConta = banco.getTipoConta();

    $scope.contas = banco.getContas();
    $scope.gastos = banco.getGastos();

    $scope.cadastrarConta = function(conta) {

        banco.adicionaGasto(angular.copy(conta));
        $scope.gastos = banco.getGastos();
    }

    $scope.checkAll = function() {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }

        angular.forEach($scope.contas, function(item) {
            item.selected = !$scope.selectedAll;
        });

    };

    $scope.open = function() {
        console.log("OPENN");
        //demoModal
        var modal = document.getElementById('demoModal');
        document.body.appendChild(modal);

        //document.appendChild(element)
        console.log(modal);
    }

    $scope.show = false;

    $scope.expand = function() {
        $scope.show = !$scope.show;
    }

    $scope.select = function(gasto) {
        gasto.selected = !gasto.selected;
    }

    $scope.pagarSelecionados = function(gastos) {
        gastos.forEach(function(gasto) {
            (gasto.selected ? gasto.pay = true : '');
            gasto.selected = false;
        })
    }

    $scope.liberarSelecionados = function(gastos) {
        gastos.forEach(function(gasto) {
            (gasto.selected ? gasto.pay = false : '');
            gasto.selected = false;
        })
    }

    $scope.apagarSelecionados = function(gastos) {
        $scope.gastos = gastos.filter(function(gasto) {
            return !gasto.selected;
        })
    }
}).filter("filtroTipoGasto", function() {

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

    return function(input) {
        var map = {
            1: "restaurant",
            2: "school",
            3: "home",
            4: "directions_car",
            5: "shopping_cart"
        }
        return map[input];
    };
});
