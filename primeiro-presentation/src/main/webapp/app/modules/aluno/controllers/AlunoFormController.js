define([], function() {


 	AlunoFormController.$inject = ['AlunoService', '$state', 'entity', '$scope', 'gumgaController'];

 	function AlunoFormController(AlunoService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, AlunoService, 'aluno');



    
    	$scope.aluno.data = entity.data || {};
		$scope.continue = {};
	
		$scope.aluno.on('putSuccess',function(data){
			$state.go('aluno.list');
		});
 	}
	
	return AlunoFormController;   
});