'use strict';

var bloq = {

    type: 'output',
    name: 'output',
    connectors: [{
        type: 'connector--output',
        accept: 'connector--input'
    }]
};

module.exports = bloq;