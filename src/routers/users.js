// const express = require("express");
// const Movie = require("../models/user");
// const router = new express.Router();

// router.post("/user", async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// router.get("/users", async (req, res) => {
//   try {
//     let users = await Movie.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// router.get("/users/:id", async (req, res) => {
//   try {
//     let user = await User.findById(req.params.id);
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// router.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// router.patch("/users/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["genre"];
//   const isValidOperation = updates.every(update =>
//     allowedUpdates.includes(update)
//   );
//   try {
//     const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
//     res.send(movie);
//   } catch (error) {
//     res.status();
//   }
// });

// router.get("/movies/:title", async (req, res) => {
//   try {
//     let movie = await Movie.find(req.params.title);
//     res.send(movie);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;

const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/users", async (req, res) => {
  try {
    let users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["Email", "Name", "Graduated"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
