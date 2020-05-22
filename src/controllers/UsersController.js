class UsersController { 

    static getUser(req, res) {
        console.log("req: ", req.url);
        res.json({
            name: "dummy name",
            age: "41"
        })
    }

    static getUserById(req, res) {
        console.log("req: ", req.params);
        res.json ({
            name: "dummy name",
            age: "42"
        })
    }

    static postNewUser(req, res) {
        console.log("req: ", req.body);
        console.log("Usuario creado exitosamente.");
    }
}

module.exports = UsersController;