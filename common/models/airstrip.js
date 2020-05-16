'use strict';

module.exports = function(airstrip) {
    airstrip.validatesUniquenessOf('airstripPilotsId', {message: 'ya existe la relacion con este piloto'});
};
