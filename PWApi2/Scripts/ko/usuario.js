var UsuarioModel = new function () {
    model = this;
    model.usuarios = ko.observable();
    model.carregar = function () {
        $.ajax("http://localhost:52464/api/usuarios").done(data => model.usuarios(data));
    }
    model.carregar();
}
ko.applyBindings(UsuarioModel);