var myApp = angular.module("Calc1", [])
    .controller('calculatorCtrl', ['$scope', function ($scope) {
        $scope.max=0;
        $scope.tab = [];
        $scope.bonne =0;
        $scope.questions = function () {
            class Exercice {
                constructor(Question, Reponse) {
                    this.Question = Question;
                    this.Reponse = Reponse;
                    this.Boolean = false;
                }
                 isTrue(boolean) {
                    this.Boolean = boolean;
                };

            }
            for (let index = 1; index < 11; index++) {
                $scope.NbrRandom2 = Math.floor(Math.random() * 100);
                $scope.NbrRandom1 = Math.floor(Math.random() * (100 - $scope.NbrRandom2 + 1) + $scope.NbrRandom2);
                var SigneRandom = Math.floor(Math.random() * (4 - 1 + 1) + 1);


                switch (SigneRandom) {
                    case 1:
                        $scope.Signe = "/";
                        $scope.Reponse = $scope.NbrRandom1 / $scope.NbrRandom2;
                        var toto = $scope.NbrRandom1 + "/" + $scope.NbrRandom2;
                        var exercice = new Exercice(toto, $scope.Reponse);
                        $scope.tab.push(exercice);
                        break;
                    case 2:
                        $scope.Signe = "-";
                        $scope.Reponse = $scope.NbrRandom1 - $scope.NbrRandom2;
                        var toto = $scope.NbrRandom1 + "-" + $scope.NbrRandom2;
                        var exercice = new Exercice(toto, $scope.Reponse);
                        $scope.tab.push(exercice);
                        break;
                    case 3:
                        $scope.Signe = "+";
                        $scope.Reponse = $scope.NbrRandom1 + $scope.NbrRandom2;
                        var toto = $scope.NbrRandom1 + "+" + $scope.NbrRandom2;
                        var exercice = new Exercice(toto, $scope.Reponse);
                        $scope.tab.push(exercice);
                        break;
                    case 4:
                        $scope.Signe = "*";
                        $scope.Reponse = $scope.NbrRandom1 * $scope.NbrRandom2;
                        var toto = $scope.NbrRandom1 + "*" + $scope.NbrRandom2;
                        var exercice = new Exercice(toto, $scope.Reponse);
                        $scope.tab.push(exercice);

                        break;

                    default:
                        break;
                }
            }

        }

        $scope.valide = function (reponse, index) {
           
           console.log($scope.max);
            if ($scope.max==9) {
                if ($scope.tab[index - 1].Reponse.toFixed(0) == reponse) {
                    var myEl = angular.element(document.querySelector('#exercice' + index));
                    myEl.addClass('border border-success');
                    $scope.tab[index - 1].isTrue(true);
                    $scope.max++;
                } else {
                    var myEl = angular.element(document.querySelector('#exercice' + index));
                    myEl.addClass('border border-danger');
                    $scope.tab[index - 1].isTrue(false);
                    $scope.max++;
                }
                document.getElementById("reponses" + index).disabled = true;
                document.getElementById("valide" + index).disabled = true;
                $scope.tab.forEach(element => {
                    console.log("element "+element.Boolean)
                    if (element.Boolean) {
                        $scope.bonne++;
                    }
                });

                alert("FINI, tu as eu "+ $scope.bonne+"/"+$scope.max);
            }else
            {
                
                console.log("$scope.tab[index - 1].Reponse.toFixed(0): "+$scope.tab[index - 1].Reponse.toFixed(0)+ "parseInt(reponse): "+reponse )
                if ($scope.tab[index - 1].Reponse.toFixed(0) == reponse) {
                    var myEl = angular.element(document.querySelector('#exercice' + index));
                    myEl.addClass('border border-success');
                    $scope.tab[index - 1].isTrue(true);
                    $scope.max++;
                } else {
                    var myEl = angular.element(document.querySelector('#exercice' + index));
                    myEl.addClass('border border-danger');
                    $scope.tab[index - 1].isTrue(false);
                    $scope.max++;
                }
                document.getElementById("reponses" + index).disabled = true;
                document.getElementById("valide" + index).disabled = true;
            }
           


        }

    }]);