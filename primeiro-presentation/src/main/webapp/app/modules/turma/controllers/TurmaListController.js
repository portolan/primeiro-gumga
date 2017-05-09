define([], function() {

  TurmaListController.$inject = ['$scope', 'TurmaService', 'gumgaController'];

  function TurmaListController($scope, TurmaService, gumgaController) {

    gumgaController.createRestMethods($scope, TurmaService, 'turma');

    TurmaService.resetDefaultState();
    $scope.turma.execute('get');

    $scope.tableConfig = {
      columns: 'codigo ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'codigo',
        title: '<span gumga-translate-tag="turma.codigo"> codigo </span>',
        content: '{{$value.codigo }}',
        sortField: 'codigo'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="turma.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return TurmaListController;
});
