define(['app/apiLocations'], function(APILocation) {

	TurmaService.$inject = ['GumgaRest'];

	function TurmaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/turma');

    	return Service;
    }

  	return TurmaService;
});