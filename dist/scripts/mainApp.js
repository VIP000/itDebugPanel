(function(){
  'use strict';
  /**
  * mainApp Module
  *
  * Just an app for testing out the module
  */
  angular.module('mainApp', ['itDebugPanel'])
    .controller('TestCtrl', function($scope){
      $scope.model = {
        test:'value',
        anotherThing:[4,5,6],
        someOtherStuff:[{label:'person'},{label:'dog'}]
      };
      $scope.pages = [1,2,3];

      $scope.testfunc = function(){
        
      }
      
    })
    .controller('TestCtrl2', function($scope){
      $scope.model = {
        moreStuff:'there\'s another thing here'
      };
      
    });
})();
