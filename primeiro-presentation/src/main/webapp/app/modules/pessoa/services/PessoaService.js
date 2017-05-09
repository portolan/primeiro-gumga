define(['app/apiLocations'], function(APILocation) {

	PessoaService.$inject = ['GumgaRest'];

	function PessoaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/pessoa');

    	return Service;
    }

  	return PessoaService;
});