define([], function() {


 	ProfessorFormController.$inject = ['ProfessorService', '$state', 'entity', '$scope', 'gumgaController'];

 	function ProfessorFormController(ProfessorService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, ProfessorService, 'professor');



    
    	$scope.professor.data = entity.data || {};
		$scope.continue = {};
	
		$scope.professor.on('putSuccess',function(data){
			$state.go('professor.list');
		});
 	}
	
	return ProfessorFormController;   
});