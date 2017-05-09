define([], function() {

  ProfessorListController.$inject = ['$scope', 'ProfessorService', 'gumgaController'];

  function ProfessorListController($scope, ProfessorService, gumgaController) {

    gumgaController.createRestMethods($scope, ProfessorService, 'professor');

    ProfessorService.resetDefaultState();
    $scope.professor.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="professor.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="professor.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ProfessorListController;
});
