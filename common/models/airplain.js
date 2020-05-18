'use strict';

module.exports = function(airplain) {
    airplain.validatesUniquenessOf('enrollment', {message: 'this enrollment has already been registred'});
};
