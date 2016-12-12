// scrabble.spec.js
import Scrabble from "scrabble"; // It automatically knows to look in the src directory


describe('Scrabble', function() {
  var testScrabble;

  beforeEach(function() {
    testScrabble = new Scrabble();
  });

  describe('score', function() {  // nested describe blocks since we testing a function inside a function

    it('should score a given word', function() {  // naming the test
        // var testScrabble = new Scrabble();
        expect(testScrabble.score('word')).toEqual(8); // defining the actual test, to ensure the behavior is happening
    });

    it('should add 50 points to an 8 letter word ', function() {  // 8 letter, not 7,  because the player is forced to intersect a word with a preexisting word
        // var testScrabble = new Scrabble();
        expect(testScrabble.score('aaaaaaaa')).toEqual(58);
    });

    it('should return NaN for invalid characters * Errors happen elsewhere in the came', function() {
        // var testScrabble = new Scrabble();
        expect(testScrabble.score('3456789')).toEqual(NaN);
    });
  });

  describe('highestScoreFrom', function() {
    it('should return the highest scoring word from an array of words', function() {  // naming the test
        // var testScrabble = new Scrabble();
        expect(testScrabble.highestScoreFrom(['thanks', 'for', 'all', 'the', 'fish'])).toEqual('thanks'); // defining the actual test, to ensure the behavior is happening
    });

    it('should return undefined for an empty array', function() {
        // var testScrabble = new Scrabble();
        expect(testScrabble.highestScoreFrom([])).toEqual(undefined);
    });

    it('should return the only word in a single word array', function() {
        // var testScrabble = new Scrabble();
        expect(testScrabble.highestScoreFrom(['quiz'])).toEqual('quiz');
    });

    it('should throw an error', function() { // Not testing scrabble, just for Error practice
        var foo = function() {
          throw new TypeError("this is a TypeError");
        };
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrow(TypeError("this is a TypeError"));
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
      var foo = function() {
        return 1 + 2;
      };
      var bar = function() {
        return a + 1;
      };

      expect(foo).not.toThrow();
      expect(bar).toThrow();
    });
  });

});
