define(function(require) {
   require('angular')
   .module('app.turma.services', [])
   .service('TurmaService', require('app/modules/turma/services/TurmaService'));
});