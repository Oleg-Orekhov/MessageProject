var User = require('../models/PgUser');


module.exports = {
    get: function (req, res) {
        User.findAll().then(users => {
            console.log(users);
            res.send(users);
        })
    },
    post: function (req, res) {
        console.log(req.body, req.file.destination);
        
        //{force: true}
        User.sync().then(() => {
            return User.create({
                email: req.body.email,
                text: req.body.text,
                dir: req.file.destination + req.file.filename
            });
        });

        res.status(200);
        
    }
}