const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");
const { User } = require("../../models");

router.post("/signup", userController.create);    


// Endpoint to login
router.post('/login',
  passport.authenticate("local"),
  function(req, res) {
    console.log("login error: ", req.user)
    res.send(req.user);
  }
);

// Endpoint to get current user
router.get('/current', function(req, res){
  res.send(req.user);
})

// Endpoint to logout
router.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});

module.exports = router;