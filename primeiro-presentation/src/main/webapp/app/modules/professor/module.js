define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/professor/services/module');
  require('app/modules/professor/controllers/module');

  return require('angular')
    .module('app.professor', [
      'ui.router',
      'app.professor.controllers',
      'app.professor.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('professor.list', {
          url: '/list',
          templateUrl: 'app/modules/professor/views/list.html',
          controller: 'ProfessorListController'
        })
        .state('professor.insert', {
          url: '/insert',
          templateUrl: 'app/modules/professor/views/form.html',
          controller: 'ProfessorFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/professor/new');
            }]
          }
        })
        .state('professor.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/professor/views/form.html',
          controller: 'ProfessorFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/professor/' + $stateParams.id);
            }]
          }
        });
    })
});