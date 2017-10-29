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

function addItem() {
  var array = { "nome": $("#item").val() };
  kk_storage.salvar(array);
  fn.load('home.html');

};

function imprimirItens() {
  var listaTarefas = kk_storage.getAll();
  var lista = $("#lista");
  lista.empty();
  for (var i = 0; i < listaTarefas.length; i++) {
      var item = listaTarefas[i];
      var tarefa = $("<ons-list-item>" + item.nome + "<div class='right'><ons-button onclick='excluirItem(" + item.id + ")'><ons-icon icon ='trash'></ons-icons></ons-button></div></ons-list-item>");
      lista.append(tarefa);
  }
}

function excluirItem(id) {
  kk_storage.excluir(id);
  imprimirItens();
}

document.addEventListener("init", function (event) {
  if (event.target.matches("#home")) {
      imprimirItens();
  }
});


