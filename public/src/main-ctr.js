
// angular.module("main",["ui.router"]);

angular.module("main",[]);

angular.module("main").controller("mainCtrl",[ "$scope", function($scope){
    $scope.mains = "todo";

    var jobBox = new Framework7({
      pushState: true,
      swipePanel: 'left',
      material:true
    });
    var mainView2 = jobBox.addView('.view-main', {
        dynamicNavbar: true

    });
    // var $$ = Dom7;

    $scope.showPage = "login";

    $scope.gotoPage = function(id){
       $scope.showPage = id;
       jobBox.closePanel();
    }
}]);

