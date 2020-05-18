'use strict';

module.exports = function(flight) {
    flight.validatesUniquenessOf('enrollment', {message: 'this enrollment has already been registred'});
    flight.validatesUniquenessOf('flightNumber', {message: 'this flightNumber has already been registred'});
    flight.validatesUniquenessOf('eventId', {message: 'this eventId has already been registred'});
    flight.validatesUniquenessOf('airstripFlightId', {message: 'this airstrip Flight relation has already been registred'});
};
