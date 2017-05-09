define(function (require) {
    var angular = require('angular');
    require('app/modules/pessoa/services/module');
    require('angular-ui-router');

    return angular
            .module('app.pessoa.controllers', ['app.pessoa.services','ui.router'])
            .controller('PessoaFormController', require('app/modules/pessoa/controllers/PessoaFormController'))
            .controller('PessoaListController', require('app/modules/pessoa/controllers/PessoaListController'));
});