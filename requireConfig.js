define( function() {

    requirejs.config({
        baseUrl: '/',
        paths: {
            'mocha': 'test/lib/mocha',
            'chai': 'test/lib/chai',
            'helloWorld': 'src/js/helloWorld',
            'helloWorldTest': 'test/unit/helloWorldTest',
            'basicMath': 'src/js/basicMath',
            'basicMathTest': 'test/unit/basicMathTest',
            'unitTests': 'test/unit/unitTests'
        },
        waitSecond: 15,

        shim: {
            'mocha': {
                init: function () {
                    this.mocha.setup('bdd');
                    return this.mocha;
                },
                exports: 'mocha'
            },
            'chai': {
                exports: 'chai'
            }
        }
    });

});

