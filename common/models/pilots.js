'use strict';

module.exports = function(pilots) {
    pilots.validatesUniquenessOf('airstripPilotsId', {message: 'ths pilot already have an airstrip'});
    pilots.validatesUniquenessOf('userName', {message: 'ths userName ahs already been registred'});
};
