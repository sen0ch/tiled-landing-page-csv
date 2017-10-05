 'use strict';

angular.module('ContentApp')
  .controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {
    $http({
      method: 'GET',
      url: './data/content.csv',
      transformResponse: function(content) {
        // Transform CSV file into a JSON object
        var json = $.csv.toObjects(content);
        return json;
      },
      cache: true,
    })
    .success(function(content) {
        $scope.content = content;
      })   
    .error(function(content) {
      $scope.content = content || 'Request failed';
    });

    $scope.listind = [2];
  }]);
  
