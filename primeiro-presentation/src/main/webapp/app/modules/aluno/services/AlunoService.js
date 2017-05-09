define(['app/apiLocations'], function(APILocation) {

	AlunoService.$inject = ['GumgaRest'];

	function AlunoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/aluno');

    	return Service;
    }

  	return AlunoService;
});