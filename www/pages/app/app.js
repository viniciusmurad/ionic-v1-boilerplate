angular.module('generic', [
	'ionic',
	'generic.example',
	'generic.menu',
]);

angular.module('generic').config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.navBar.alignTitle('center');

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/example');
})

angular.module('generic').run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
