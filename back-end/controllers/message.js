var User = require('../models/PgUser');


module.exports = {
    get: function (req, res) {
        Message.find({}).populate('user', '-pwd').exec(function (err, result) {
            res.send(result);
        })
    },
    post: function (req, res) {
        console.log(req.body, req.file.destination);
        
        
        User.sync({force: true}).then(() => {
            return User.create({
                email: req.body.email,
                password: req.body.password,
                dir: req.file.destination + req.file.filename
            });
        });

        res.status(200);
        
    }
}