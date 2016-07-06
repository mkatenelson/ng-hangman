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
  $scope.guessLetter = function() {
    // guesses a letter
    $scope.hangman.guess($scope.userGuess);
    // clears the input
    $scope.userGuess = "";
  };
}
