var app5 = angular.module('app5', []);


app5.controller('gListCtrl', function($scope){

  $scope.groceries = [
    {item: "Tomatoes", purchased: false},
    {item: "Potatoes", purchased: false},
    {item: "Bread", purchased: false},
    {item: "Hummus", purchased: false}
  ];

  // $scope.addItem = function(newItem){
  //   if(!(newItem === undefined || newItem === "")){
  //     $scope.groceries.push({
  //       item: newItem, purchased: false
  //     });
  //     $scope.missingNewItemError = "";
  //   } else {
  //     $scope.missingNewItemError = "Please enter an item";
  //   }
  // };

  $scope.addItem = function(theItem){
    if(theItem === undefined || theItem === ""){
      $scope.missingNewItemError = "Please enter an Item";
    } else {
      $scope.groceries.push({item: theItem, purchased: false});
      $scope.missingNewItemError = "";
    }
  };

});






















// Start of controller UserCtrl
app5.controller('userCtrl', function($scope){

  $scope.user = [{
    fName: "Chase",
    lName: "Olsen",
    street: "123 Main Str",
    subscribe: "Subscribe",
    delivery: "Email"
  }];

  $scope.saveUser = function(userInfo){
    if($scope.userForm.$valid){
      $scope.user.push({
        fName: userInfo.fName,
        lName: userInfo.lName,
        street: userInfo.street,
        subscribe: userInfo.subscribe,
        delivery: userInfo.delivery
      });
      console.log("user saved");
    } else {
      console.log("error");
    }
  }













});
