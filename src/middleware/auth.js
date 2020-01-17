const User = require("../models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "obeysudo");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });
    if (!user) {
      throw new Error();
    }
    req.user = user; //route handler will not have to fetch user account
    next();
  } catch (error) {
    res.send(401).send({ error: "please authentification" });
  }
};

module.exports = auth;
