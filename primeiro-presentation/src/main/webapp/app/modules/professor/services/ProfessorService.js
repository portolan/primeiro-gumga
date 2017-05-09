define(['app/apiLocations'], function(APILocation) {

	ProfessorService.$inject = ['GumgaRest'];

	function ProfessorService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/professor');

    	return Service;
    }

  	return ProfessorService;
});