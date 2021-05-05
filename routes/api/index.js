const router = require("express").Router();
const userRoutes = require("./user");

// Profile routes
router.use("/user", userRoutes);

module.exports = router;
