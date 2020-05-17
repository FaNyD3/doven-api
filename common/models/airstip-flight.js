'use strict';

module.exports = function(airstipflight) {
    airstipflight.validatesUniquenessOf('FlightId', {message: 'this flight is already registered'});
};
