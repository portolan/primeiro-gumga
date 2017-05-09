define([], function() {

  PessoaListController.$inject = ['$scope', 'PessoaService', 'gumgaController'];

  function PessoaListController($scope, PessoaService, gumgaController) {

    gumgaController.createRestMethods($scope, PessoaService, 'pessoa');

    PessoaService.resetDefaultState();
    $scope.pessoa.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="pessoa.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="pessoa.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return PessoaListController;
});
