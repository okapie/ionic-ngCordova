/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	// Ionic Starter App

	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	// 'starter.services' is found in services.js
	// 'starter.controllers' is found in controllers.js
	angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']).run(function ($ionicPlatform) {
	  $ionicPlatform.ready(function () {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	      cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if (window.StatusBar) {
	      // org.apache.cordova.statusbar required
	      StatusBar.styleDefault();
	    }
	  });
	}).config(function ($stateProvider, $urlRouterProvider) {

	  // Ionic uses AngularUI Router which uses the concept of states
	  // Learn more here: https://github.com/angular-ui/ui-router
	  // Set up the various states which the app can be in.
	  // Each state's controller can be found in controllers.js
	  $stateProvider

	  // setup an abstract state for the tabs directive
	  .state('tab', {
	    url: '/tab',
	    abstract: true,
	    templateUrl: 'templates/tabs.html'
	  })

	  // Each tab has its own nav history stack:

	  .state('tab.dash', {
	    url: '/dash',
	    views: {
	      'tab-dash': {
	        templateUrl: 'templates/tab-dash.html',
	        controller: 'DashCtrl'
	      }
	    }
	  }).state('tab.chats', {
	    url: '/chats',
	    views: {
	      'tab-chats': {
	        templateUrl: 'templates/tab-chats.html',
	        controller: 'ChatsCtrl'
	      }
	    }
	  }).state('tab.chat-detail', {
	    url: '/chats/:chatId',
	    views: {
	      'tab-chats': {
	        templateUrl: 'templates/chat-detail.html',
	        controller: 'ChatDetailCtrl'
	      }
	    }
	  }).state('tab.account', {
	    url: '/account',
	    views: {
	      'tab-account': {
	        templateUrl: 'templates/tab-account.html',
	        controller: 'AccountCtrl'
	      }
	    }
	  });

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/tab/dash');
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	angular.module('starter.controllers', []).controller('DashCtrl', function ($scope) {}).controller('ChatsCtrl', function ($scope, Chats) {
	  // With the new view caching in Ionic, Controllers are only called
	  // when they are recreated or on app start, instead of every page change.
	  // To listen for when this page is active (for example, to refresh data),
	  // listen for the $ionicView.enter event:
	  //
	  //$scope.$on('$ionicView.enter', function(e) {
	  //});

	  $scope.chats = Chats.all();
	  $scope.remove = function (chat) {
	    Chats.remove(chat);
	  };
	}).controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	  $scope.chat = Chats.get($stateParams.chatId);
	}).controller('AccountCtrl', function ($scope) {
	  $scope.settings = {
	    enableFriends: true
	  };
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	angular.module('starter.services', []).factory('Chats', function () {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var chats = [{
	    id: 0,
	    name: 'Ben Sparrow',
	    lastText: 'You on your way?',
	    face: 'img/ben.png'
	  }, {
	    id: 1,
	    name: 'Max Lynx',
	    lastText: 'Hey, it\'s me',
	    face: 'img/max.png'
	  }, {
	    id: 2,
	    name: 'Adam Bradleyson',
	    lastText: 'I should buy a boat',
	    face: 'img/adam.jpg'
	  }, {
	    id: 3,
	    name: 'Perry Governor',
	    lastText: 'Look at my mukluks!',
	    face: 'img/perry.png'
	  }, {
	    id: 4,
	    name: 'Mike Harrington',
	    lastText: 'This is wicked good ice cream.',
	    face: 'img/mike.png'
	  }];

	  return {
	    all: function all() {
	      return chats;
	    },
	    remove: function remove(chat) {
	      chats.splice(chats.indexOf(chat), 1);
	    },
	    get: function get(chatId) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = chats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var i = _step.value;

	          if (i.id === parseInt(chatId)) {
	            return i;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return null;
	    }
	  };
	});

/***/ }
/******/ ]);