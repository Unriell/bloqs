/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../utils'),
    StatementBloq = require('./../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'oscillatorStart',
    bloqClass: 'bloq-oscillator-start',
    content: [
        [{
            alias: 'text',
            value: 'Reproducir oscilador'
        }, {
            id: 'OSCILLATOR',
            alias: 'dynamicDropdown',
            options: 'oscillators'
        }]
    ],
    code: '{OSCILLATOR}.start();'
});

utils.generateBloqInputConnectors(bloq);

module.exports = bloq;