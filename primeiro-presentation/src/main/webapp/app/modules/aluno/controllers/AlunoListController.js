define([], function() {

    AlunoListController.$inject = ['$scope', 'AlunoService', 'gumgaController', 'GumgaAlert'];

    function AlunoListController($scope, AlunoService, gumgaController, GumgaAlert) {

        gumgaController.createRestMethods($scope, AlunoService, 'aluno');

        AlunoService.resetDefaultState();
        $scope.aluno.execute('get');

        var config = {
            offset: 10,
            timer: 100,
            delay: 3000,
            allowdismiss: true,
            animationEnter: 'animated fadeInRightBig',
            animationExit: 'animated fadeOutRight'
        }

        $scope.aluno.on('deleteSuccess', function() {
            //GumgaAlert.createSuccessMessage('Sucesso!', 'Registro deletado com sucecsso', config)
            $scope.aluno.execute('get')
        })

        $scope.tableConfig = {
            columns: 'nome , ra, button',
            checkbox: true,
            headers: true,
            columnsConfig: [{
                    name: 'nome',
                    title: '<span gumga-translate-tag="aluno.nome"> nome </span>',
                    content: '{{$value.nome }}',
                    sortField: 'nome',
                    size: 'col-md-7'
                },
                {
                    name: 'ra',
                    title: '<span gumga-translate-tag="aluno.ra"> ra </span>',
                    content: '{{$value.ra }}',
                    sortField: 'ra',
                    size: 'col-md-2'
                },

                {
                    name: 'button',
                    title: ' ',
                    content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="aluno.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>',
                    size: 'col-md-2'
                }
            ]
        };

    };
    return AlunoListController;
});