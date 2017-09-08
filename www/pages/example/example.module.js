angular.module('generic.example', []);

angular.module('generic.example').config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('app.example', {
      url: '/example',
      views: {
        'menuContent': {
          templateUrl: 'pages/example/example.template.html',
          controller: 'ExampleController'
        }
      }
    })

});
