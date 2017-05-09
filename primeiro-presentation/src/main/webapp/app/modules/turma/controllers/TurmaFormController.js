define([], function() {


 	TurmaFormController.$inject = ['TurmaService', '$state', 'entity', '$scope', 'gumgaController', 'ProfessorService'];

 	function TurmaFormController(TurmaService, $state, entity, $scope, gumgaController, ProfessorService) {

    	gumgaController.createRestMethods($scope, TurmaService, 'turma');


	    gumgaController.createRestMethods($scope, ProfessorService, 'professor');
	    $scope.professor.methods.search('nome','');    

    
    	$scope.turma.data = entity.data || {};
		$scope.continue = {};
	
		$scope.turma.on('putSuccess',function(data){
			$state.go('turma.list');
		});
 	}
	
	return TurmaFormController;   
});