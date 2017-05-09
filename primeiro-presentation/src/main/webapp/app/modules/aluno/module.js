define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/aluno/services/module');
  require('app/modules/aluno/controllers/module');

  return require('angular')
    .module('app.aluno', [
      'ui.router',
      'app.aluno.controllers',
      'app.aluno.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('aluno.list', {
          url: '/list',
          templateUrl: 'app/modules/aluno/views/list.html',
          controller: 'AlunoListController'
        })
        .state('aluno.insert', {
          url: '/insert',
          templateUrl: 'app/modules/aluno/views/form.html',
          controller: 'AlunoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/aluno/new');
            }]
          }
        })
        .state('aluno.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/aluno/views/form.html',
          controller: 'AlunoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/aluno/' + $stateParams.id);
            }]
          }
        });
    })
});