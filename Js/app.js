var myApp = angular.module("Calc1", []);

myApp.controller('calculatorCtrl', ['$scope', function($scope){

  
    $scope.questions = function() {

        $scope.NbrRandom2 = Math.floor(Math.random() * 100);
        $scope.NbrRandom1 = Math.floor(Math.random()*(100-Random2+1)+Random2);
        SigneRandom = Math.floor(Math.random()*(4-1+1)+1);

    switch (SigneRandom) {
    case 1: 
        $scope.Signe="/";
        $scope.Response = NbrRandom1 / NbrRandom2;
        break;
    case 2: 
        $scope.Signe="-";
        $scope.Response = NbrRandom1 - NbrRandom2;
        break;
    case 3: 
        $scope.Signe="+";
        $scope.Response = NbrRandom1 + NbrRandom2;
        break;
    case 4: 
        $scope.Signe="*";
        $scope.Response = NbrRandom1 * NbrRandom2;
        break;

    default:
        break;
    }
    }






}]);