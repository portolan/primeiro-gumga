define(function(require) {
   require('angular')
   .module('app.professor.services', [])
   .service('ProfessorService', require('app/modules/professor/services/ProfessorService'));
});