;(function(module, angular, window, undefined) {

module.provider('Twitter', [function() {
  var _development = false;
  this.development = function(config) {
    _development = config && _development;
    return this;
  }

  this.$get = function() {

  };

}])

}(angular.module('angular-twitter', []), angular, window))
