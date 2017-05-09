define(function (require) {
    var angular = require('angular');
    require('app/modules/turma/services/module');
    require('angular-ui-router');

    return angular
            .module('app.turma.controllers', ['app.turma.services','ui.router'])
            .controller('TurmaFormController', require('app/modules/turma/controllers/TurmaFormController'))
            .controller('TurmaListController', require('app/modules/turma/controllers/TurmaListController'));
});