define(function(require) {
   require('angular')
   .module('app.pessoa.services', [])
   .service('PessoaService', require('app/modules/pessoa/services/PessoaService'));
});