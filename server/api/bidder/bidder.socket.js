/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Bidder = require('../../sqldb').Bidder;

exports.register = function(socket) {
  Bidder.hook('afterCreate', function(doc, fields, fn) {
    onSave(socket, doc);
    fn(null);
  });
  Bidder.hook('afterUpdate', function(doc, fields, fn) {
    onSave(socket, doc);
    fn(null);
  });
  Bidder.hook('afterDestroy', function(doc, fields, fn) {
    onRemove(socket, doc);
    fn(null);
  });
};

function onSave(socket, doc, cb) {
  socket.emit('bidder:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('bidder:remove', doc);
}
