/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: mBotGetDistance
 *
 * Bloq type: Output
 *
 *
 *
 * Return type: float
 */

var mBotGetDistance = _.merge(_.clone(OutputBloq, true), {

    name: 'mBotGetDistance-v2',
    bloqClass: 'bloq-mbot-getdistance',
    content: [
        [{
            alias: 'text',
            value: 'bloq-mbot-getdistance'
        }, {
            id: 'ULTRASOUND',
            alias: 'dynamicDropdown',
            options: 'mkb_ultrasound'
        }]
    ],
    code: '',
    returnType: {
        type: 'simple',
        value: 'float'
    },
    arduino: {
        includes: ['BitbloqUS.h', 'BitbloqMBot.h'],
        needInstanceOf: [{
            name: '{ULTRASOUND}',
            type: 'BitbloqUltrasound',
            arguments: ['MCORE::getPinFromPort(º[{ULTRASOUND}.pin.s], 2)', 'MCORE::getPinFromPort(º[{ULTRASOUND}.pin.s], 2)']
        }, {
            name: 'mBot',
            type: 'BitbloqMBot'
        }],
        setupExtraCode: '{ULTRASOUND} = new US(mBot.getPinFromPort(º[{ULTRASOUND}.pin.s],2),mBot.getPinFromPort(º[{ULTRASOUND}.pin.s],2));',
        setupCodeAtTheEndOfExtraCode: 'mBot.setup();\n{ULTRASOUND}.setup();',
        code: '{ULTRASOUND}.read()'
    }
});
utils.preprocessBloq(mBotGetDistance);

module.exports = mBotGetDistance;