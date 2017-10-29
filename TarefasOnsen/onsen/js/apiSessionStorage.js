window.kk_storage = (function () {
    sessionStorage.setItem("tarefas", "[]");

    function insertStorage(tarefas) {
        if (!Array.isArray(tarefas))
            throw new Error("Deve ser um Array");

        sessionStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    function getAll() {
        return JSON.parse(sessionStorage.getItem("tarefas"));
    }

    function getById(id) {
        var item = null;
        var db = getAll();
        for (var i = 0; i < db.length; i++) {
            var element = db[i];
            if (element.id == id) {
                item = db[i];
                break;
            }
        }
        return item;
    }

    function addItem(item) {
        var db = getAll();
        db.push(item);
        insertStorage(db);
    }

    function editItem(item) {
        var db = getAll();
        for (var i = 0; i < db.length; i++) {
            var element = db[i];
            if (element.id == item.id) {
                db[i] = item;
                break;
            }
        }
        insertStorage(db);
    }

    function geraId() {
        var novoId = Math.floor(Math.random() * 200);
        var booleanExiste = function () {
            return getAll().filter(function (element) {
                return element.id == novoId
            }).length > 0;
        }
        while (booleanExiste()) {
            novoId = Math.floor(Math.random() * 200);
        }
        return novoId;
    }

    return {
        salvar: function (item) {
            item.id = geraId();
            addItem(item);
        },
        editar: function (item) {
            var entity = getById(item.id);
            entity.nome = item.nome;
            editItem(entity);
        },
        getById: getById,
        getAll: getAll,
        excluir: function (id) {
            debugger;
            var db = getAll();
            var index = db.findIndex(x => x.id == id);
            db.splice(index, 1);
            insertStorage(db);
        }
    };
})();