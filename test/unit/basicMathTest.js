define(function (require) {
	'use strict';

	var mocha = require('mocha');
	var should = require('chai').should();

	var basicMath = require('basicMath');

	describe('basicMath', function() {

		describe('add', function() {
			it('should add two numbers: 2 + 2 should equal 4', function() {
				var result = basicMath.add(2,2);

				result.should.be.equal(4);
			});

			it('should add two numbers: 3 + 2 should equal 5', function() {
				var result = basicMath.add(3,2);

				result.should.be.equal(5);
			});

			it('should throw an error if only given one number', function() {
				var result = function () {
					return basicMath.add(3);
				};

				result.should.throw(Error);
			});
		});

	});
});