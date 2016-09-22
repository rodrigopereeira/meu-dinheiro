angular.module('meudinheiro', ['ui.router', 'oc.lazyLoad', 'ui.materialize', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/inicio');

        $stateProvider
            .state('inicio', {
                url: "/inicio", // root route
                templateUrl: 'partials/inicio.html',
                controller: 'inicioController',
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('js/controllers/inicioController.js');
                    }]
                }
            })
            .state('contas', {
                url: '/contas',
                templateUrl: 'partials/contas.html',
                controller: 'contaController',
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('js/controllers/contaController.js');
                    }]
                }
            });



        // Utilizando o HTML5 History API

    });
