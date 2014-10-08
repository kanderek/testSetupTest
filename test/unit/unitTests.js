define(function (require) {
	'use strict';

	console.log('unitTests should run here');
	var mocha = require('mocha');

	// mocha.setup('bdd');
	
	var helloWorldTest = require('helloWorldTest');
	var basicMathTest = require('basicMathTest');

    if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    }
    else {
      mocha.run();
    }
});