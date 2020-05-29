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
        res.json({
            id: req.params.id,
            last_name: req.query.last_name
        })
    }

    static postNewUser(req, res) {
        console.log("req: ", req.body);

        const id = req.body.id;
        const category = req.body.category;

        const users = {
            premium: {
                "001": {
                    name: "Shinji",
                    age: 14
                },
                "002": {
                    name: "Asuka",
                    age: 15
                }
            },

            standard: {
                "001": {
                    name: "Jhonny",
                    age: 14
                },
                "002": {
                    name: "Azucar",
                    age: 15
                }
            }
        }

        if (!users[category]) {
            res.json({
                category: "No existe categoria"
            })
        } else if (!users[category][id]) {
            res.json ({
                id: "No existe este id"
            }) 
        } else {
            res.json({ 
                data: users[category][id]
            })
        }

        console.log("Usuario creado exitosamente.");
    }
}

module.exports = UsersController;