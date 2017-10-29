window.fn = {};

window.fn.open = function () {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function (page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

// var db = null;

// //Parametros: transação e erro
// function onError(tx, e) {
//   alert("deu ruim " + e.message);
// }

// function onSuccess(tx, e) {
//   alert("deu bom ");
// }