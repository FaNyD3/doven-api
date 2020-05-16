'use strict';

module.exports = function(airstripPilots) {
    airstripPilots.validatesUniquenessOf('pilotId', {message: 'pilotId is already registered unique'});
};
