define(function(require) {
   require('angular')
   .module('app.aluno.services', [])
   .service('AlunoService', require('app/modules/aluno/services/AlunoService'));
});