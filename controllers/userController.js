const db = require("../models");

//Defining methods for userController
module.exports = {
    create: function(req,res) {
        var password = req.body.password;

        var newUser = new db.User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        });
        
        console.log("dbUser/userController", newUser)
        db.User.createUser(newUser, function(err, user){
          if(err) throw err;
          res.send(user).end()
        });
    },
    find: function(req,res) {
        db.User.find(req.body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.status(422).json(err);
        });
    },
    // populate: function(req, res) {
    //     db.User.find({})
    //     .populate("symptoms")
    //     .then(dbUser => {
    //       res.json(dbUser);
    //     })
    //     .catch(err => {
    //       res.json(err);
    //     });
    // },
    login: function(req,res) {
      res.send(req.user);
    }
}

