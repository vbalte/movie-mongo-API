const express = require("express");
const Review = require("../models/review");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/reviews", auth, async (req, res) => {
  //const review = new Review(req.body);
  const review = new Review({
    ...req.body,
    owner: req.user._id
  });
  try {
    await review.save();
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/reviews", async (req, res) => {
  try {
    let reviews = await Review.find({});
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/reviews/me", auth, async (req, res) => {
  try {
    await req.user.populate("reviews").execPopulate();
    res.send(req.user.reviews);
  } catch (error) {
    res.send(error);
  }
});

router.get("/reviews/:id", async (req, res) => {
  const movie = req.params.id;
  const limit = parseInt(req.query.limit); 
  const skip = parseInt(req.query.skip);
  const sort = parseInt(req.query.sort); 
  try {
    let reviews = await Review.find({ movie: movie })
    .skip(skip)
    .limit(limit)
    .sort({ createdAT: sort}); 
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.patch("/reviews/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["reviewText", "reviewScore"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    res
      .status(400)
      .send({ error: "Invalid Updates, please only update the review text" });
  }
  try {
    const review = await Review.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!review) {
      return res.status(404).send(); 
    }
     updates.forEach(update => (review[update] = req.body[update]));
    await review.save();
    if (!review) {
      return res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/reviews/:id", auth, async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    }); 

    if (!review) {
      res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
