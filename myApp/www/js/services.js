angular.module('starter.services', [])

.factory('Proveedores', function(){
  var proveedores = [{
    id: 0,
    name: 'Avemus Pizza'
  }, {
    id: 1,
    name: 'Maximo Pizza'
  }];

return {
  all: function(){
    return proveedores;
  },
  remove: function(proveedor){
    proveedores.splice(proveedores.indexOf(proveedor), 1);
  },
  get: function(proveedorId){
    for (var i = 0; i < proveedores.length; i++) {
        if (proveedores[i].id === parseInt(proveedorId)) {
          return proveedores[i];
        }
      }
      return null;
  }
}
  
})

.factory('Promos', function(){
  var promos = [{
    id: 0,
    idProveedor: 0,
    name: 'Promoción 0'
  }, {
    id: 1,
    idProveedor: 1,
    name: 'Promoción 1'
  }, {
    id: 2,
    idProveedor: 0,
    name: 'Promoción 2'
  }, {
    id: 3,
    idProveedor: 1,
    name: 'Promoción 3'
  }, {
    id: 4,
    idProveedor: 0,
    name: 'Promoción 4'
  }];

return {
  all: function(){
    return promos;
  },
  remove: function(promo){
    promos.splice(promos.indexOf(promo), 1);
  },
  get: function(promoId){
    for (var i = 0; i < promos.length; i++) {
        if (promos[i].id === parseInt(promoId)) {
          return promos[i];
        }
      }
      return null;
  },
  getByProveedor: function(proveedorId){
    var  resultado = new Array();
    for (var i = 0; i<promos.length; i++) {
      if (promos[i].idProveedor === parseInt(proveedorId)) {
        resultado.push(promos[i]);
      }
    }

    return resultado;
  }
}
  
})

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

