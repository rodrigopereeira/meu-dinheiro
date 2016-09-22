angular.module('contas', ['ui.materialize']);

angular.module('contas').controller('contasController', function ($scope) {
  console.log("Angular");

  $scope.contas = [
    {name: 'Santander'},
    {name: 'Nubank'},
    {name: 'Banco do Brasil'},
    {name: 'Pessoal'},
  ];

  $scope.tipos = [
    {name: 'Alimentação'},
    {name: 'Combustível'},
    {name: 'Educação'},
    {name: 'Outros'},
  ];
  $scope.show = true;

  $scope.expand = function () {
    console.log("Expandindo");
    $scope.show = !$scope.show;
  }
})

angular.module('contas').directive('dExpandCollapse', function() {

  return {
          restrict: 'EA',
          link: function(scope, element, attrs){

            $(element).click( function() {
            	//var show = "false";
            	$(element).find(".div-expand").slideToggle('200',function() {
                    // You may toggle + - icon
            		$(element).find("span").toggleClass('faqPlus faqMinus');
            	});


            	if($("div.div-expand:visible").length>1) {
  // You may toggle + - icon           		    //$(this).parent().find("span.faqMinus").removeClass('faqMinus').addClass('faqPlus');
            		$(this).siblings().find(".div-expand").slideUp('slow');
            	}


       		  });

          }
        }



});
