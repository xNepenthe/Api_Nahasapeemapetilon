class UsersController { 

    static getUser(req, res) {
        console.log("req: ", req.url);
        res.json({
            name: "dummy name",
            age: "42"
        })
    }

    static getUserById(req, res) {
        console.log("req: ", req.params);
        res.json ({
            id: req.params.id,
            last_name: req.query.last_name
        })
    }

    static postNewUser(req, res) {
        console.log("req: ", req.body);
        console.log("Usuario creado exitosamente.");
        res.json({
            message: "Usuario creado exitosamente."
        })
    }
}

module.exports = UsersController;