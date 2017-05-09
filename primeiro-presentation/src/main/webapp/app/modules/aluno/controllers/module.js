define(function (require) {
    var angular = require('angular');
    require('app/modules/aluno/services/module');
    require('angular-ui-router');

    return angular
            .module('app.aluno.controllers', ['app.aluno.services','ui.router'])
            .controller('AlunoFormController', require('app/modules/aluno/controllers/AlunoFormController'))
            .controller('AlunoListController', require('app/modules/aluno/controllers/AlunoListController'));
});