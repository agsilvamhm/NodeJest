"use strict";
exports.__esModule = true;
exports.UsersController = void 0;
var database_1 = require("../database");
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.criarUsuario = function (request, response) {
        var name = request.body.name;
        if (name.length < 1) {
            return response.status(403).json('Não é possível criar um usuário sem um nome.');
        }
        database_1.database.push(name);
        return response.status(201).json({ 'mensagem': "Usu\u00E1rio ".concat(name, " criado") });
    };
    UsersController.prototype.listarUsuario = function (request, response) {
        return response.status(200).json(database_1.database);
    };
    return UsersController;
}());
exports.UsersController = UsersController;
