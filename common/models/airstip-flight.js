'use strict';

module.exports = function(airstipflight) {
    airstipflight.validatesUniquenessOf('flightId', {message: 'this flight is already registered'});
};
