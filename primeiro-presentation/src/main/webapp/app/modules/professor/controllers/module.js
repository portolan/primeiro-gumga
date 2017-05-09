define(function (require) {
    var angular = require('angular');
    require('app/modules/professor/services/module');
    require('angular-ui-router');

    return angular
            .module('app.professor.controllers', ['app.professor.services','ui.router'])
            .controller('ProfessorFormController', require('app/modules/professor/controllers/ProfessorFormController'))
            .controller('ProfessorListController', require('app/modules/professor/controllers/ProfessorListController'));
});