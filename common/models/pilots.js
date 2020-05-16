'use strict';

module.exports = function(pilots) {
    pilots.validatesUniquenessOf('airstripPilotsId', {message: 'ths pilot already have an airstrip'});
};
