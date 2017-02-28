var app3 = angular.module('app3', []);

app3.controller('gListCtrl', function($scope){

  $scope.groceries = [
    {item: "Tomatoes", purchases: false},
    {item: "Potatoes", purchases: false},
    {item: "Bread", purchases: false},
    {item: "Hummus", purchases: false},
  ];

  $scope.getList = function(){
    return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html"
  }

});
