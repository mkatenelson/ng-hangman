console.log('app.js loaded!');

// APP
// initialize the application
angular
  .module("hangmanApp", [])
  .controller("hangmanCtrl", hangmanCtrl);

// CONTROLLER
hangmanCtrl.$inject = ["$scope"];
  function hangmanCtrl($scope) {
    // new game
    $scope.hangman = new HangmanGame("hiphopopotomous");
    $scope.guessLetter = function (input) {
      $scope.hangman.guess(input);
      $scope.hangman.input = "";
    };

  }
