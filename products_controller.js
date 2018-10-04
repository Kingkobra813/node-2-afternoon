module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_product([name, description, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "It broke!" });
                console.log(err)
            });
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product(params.id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "It broke!" })
                console.log(err)
            })
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "It broke!" })
                console.log(err)
            })
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product([params.id, query.desc])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "It broke!" })
                console.log(err)
            })
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product(params.id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "It Broke!" })
                console.log(err)
            })
    }
}