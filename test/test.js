var assert      = require('assert');
var filterChain = require('../index.js');

/**
 * Removes whitespace characters
 * @param   {string}    value
 * @returns {string}
 */
function removeWhitespace(value) {
	return value.replace(/\s*/g, '');
}

/**
 * Removes alphabetical characters
 *  - uses callback for async filtering e.g. posting something to a server for processing
 * @param   {string}    value
 * @param   {function}  cb
 * @returns {void}
 */
function removeAlphabetical(value, cb) {
	setTimeout(function() {
		cb(value.replace(/[a-zA-Z]+/g, ''));
	}, 500);
}

describe('chain#filter', function () {

	var chain = filterChain([removeWhitespace, removeAlphabetical]);

	it('should strip spaces and alphabetical characters', function(done) {
		chain.filter('   my phone number is a (02)12345678   ', function(value) {
			assert.equal(value, '(02)12345678');
			done();
		});
	});

	it('should strip spaces, tabs and alphabetical characters', function(done) {
		chain.filter('\tmy phone number is (02) 12345678\n', function(value) {
			assert.equal(value, '(02)12345678');
			done();
		});
	});

});