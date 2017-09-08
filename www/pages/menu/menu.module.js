angular.module('generic.menu', []);

angular.module('generic.menu').config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'pages/menu/menu.template.html'
  })

});
