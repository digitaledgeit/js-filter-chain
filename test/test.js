var assert = require('assert')
var FilterCollection = require('../index.js');

var collection = new FilterCollection([
  function(val) {
    return val.replace(/[a-zA-Z]*/g, '');
  },
  function(val) {
    return val.replace(/\s*/g, '');
  }
]);

describe('filter#filter', function() {

  it('should strip spaces and alphabetical characters', function() {
    assert.equal(collection.filter('   my phone number is a (02)12345678   '), '(02)12345678');
  });

  it('should strip tabs and alphabetical characters', function() {
    assert.equal(collection.filter('\tmy phone number is (02)12345678\n'), '(02)12345678');
  });

});