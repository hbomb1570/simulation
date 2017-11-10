module.exports = {

    readShelf:
    (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.readShelf([id])
            .then(shelf => {
                res.status(200).send(shelf)
                    .catch(console.log)
            })
        },

    readBin:
    (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.readBin([id])
            .then(bin => {
                res.status(200).send(bin)
                    .catch(console.log)
            })
        },

            update: 
            (req, res) => {
                const db = req.app.get('db')
                const {id} = req.params
                const { name, price} = req.body

                db.updateBin([ id, name, price])
                .then(() => {
                    res.status(200).send()
                    .catch(console.log)
                })
        },

            delete: 
            (req, res) => {
                const db = req.app.get('db')
                const {id} = req.params
                
                db.deleteBin([id])
                .then(() => {
                    res.status(200).send()
                    .catch(console.log)
                })
            },

            create: 
            (req, res) => {
            const db = req.app.get('db')
            const {id} = req.params
            const { name, price} = req.body

            db.createBin([id, name, price])
            .then(() => {
                res.status(200).send()
                .catch(console.log)
            })
            }
}