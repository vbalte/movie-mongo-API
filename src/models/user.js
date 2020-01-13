//////email, name, graduated, require name and email, give graduated a default value

const mongoose = require("mongoose");
const User = mongoose.model("user", {
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  graduated: {
    type: Boolean,
    default: false
  }
});

module.exports = User;
