'use strict';

module.exports = function(airstrip) {
    airstrip.validatesUniquenessOf('airstripPilotsId', {message: 'this airstrip pilot relation has already been registred'});
    airstrip.validatesUniquenessOf('name', {message: 'this name has already been registred'});
    airstrip.validatesUniquenessOf('airstripFlightsId', {message: 'this airstrip flight relation has already been registred'});
};
