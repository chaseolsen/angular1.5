angular.module('app9', []).directive('jqlDirective', function(){
  return function(scope, element, attrs){
    // if the name of directive has a capital 'jqlDirective', then the html will use a - and lowercase 'jql-directive'
    // element.children ties EVERYTHING from the ul jql-directive to the ending ul
    var players = element.children();

    var listOfPlayer = "";

    for (var i = 0; i < players.length; i++){
      if(players.eq(i).text() == "Barry Bonds"){
        players.eq(i).css("color", "red");

        players.eq(i).attr("number", "25");
      }
    }
  }
})
.controller('mainCtrl', function($scope){

});
