define(function(require) {
	'use strict';

	var mocha = require('mocha');
	var should = require('chai').should();

	var helloWorld = require('helloWorld');

	describe('helloWorld', function() {

		it('should...', function() {
			helloWorld.name.should.be.equal('hello');
		
		});

		it('should also...', function() {
			helloWorld.should.exist;
		});

		it('should maybe also...', function() {

			helloWorld.greeting.should.equal('hello world');
		});

	});
});