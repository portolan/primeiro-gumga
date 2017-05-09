define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/turma/services/module');
  require('app/modules/turma/controllers/module');

  return require('angular')
    .module('app.turma', [
      'ui.router',
      'app.turma.controllers',
      'app.turma.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('turma.list', {
          url: '/list',
          templateUrl: 'app/modules/turma/views/list.html',
          controller: 'TurmaListController'
        })
        .state('turma.insert', {
          url: '/insert',
          templateUrl: 'app/modules/turma/views/form.html',
          controller: 'TurmaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/turma/new');
            }]
          }
        })
        .state('turma.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/turma/views/form.html',
          controller: 'TurmaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/turma/' + $stateParams.id);
            }]
          }
        });
    })
});