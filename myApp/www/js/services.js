angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Encabezado Noticia',
    lastText: 'Detalle de la noticia',
    face: 'img/noticia.png'
  }, {
    id: 1,
    name: 'Encabezado Noticia',
    lastText: 'Detalle de la noticia',
    face: 'img/noticia.png'
  }, {
    id: 2,
    name: 'Encabezado Noticia',
    lastText: 'Detalle de la noticia',
    face: 'img/noticia.png'
  }, {
    id: 3,
    name: 'Encabezado Noticia',
    lastText: 'Detalle de la noticia',
    face: 'img/noticia.png'
  }, {
    id: 4,
    name: 'Encabezado Noticia',
    lastText: 'Detalle de la noticia',
    face: 'img/noticia.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
