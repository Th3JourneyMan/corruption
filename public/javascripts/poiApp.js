var app = angular.module('app', []);

app.controller('ctrl', function($scope){

  $scope.viewText = "Search Results";
  $scope.toggle = 'searchResults';

  $scope.toggleView = function(){
    $scope.toggle = $scope.toggle === 'searchResults' ? 'savedResults' : 'searchResults';
    $scope.viewText = $scope.toggle === 'searchResults' ? 'Search Results' : 'Saved Results';
    console.log("toggle!");
  };

  $scope.search = function() {
    $scope.viewText = this.searchText;
    console.log("viewText is now:  " + $scope.viewText);
  };
});
