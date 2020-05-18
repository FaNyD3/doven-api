'use strict';

module.exports = function(calendar) {
    calendar.validatesUniquenessOf('activity', {message: 'ya activity has already been registred'});
};
