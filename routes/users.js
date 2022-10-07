var express = require('express');
var router = express.Router();

const { model } = require('mongoose');

const User = require("../schema/user");

/* GET users listing. */
router.get('/all', async function (req, res, next) {

  const Model = model("User");

  const users = await Model.find({});

  res.send({ success: true, data: users });
});

/* GET single user listing. */
router.get('/single/:id', async function (req, res, next) {

  const Model = model("User");

  const user = await Model.findById(req.params.id);

  res.send({ success: true, data: user });
});

/* DELETE single user listing. */
router.get('/delete/:id', async function (req, res, next) {

  const Model = model("User");

  await Model.deleteOne({ _id: req.params.id });

  res.redirect("/");
});

/* POST user listing. */
router.post('/insert', async function (req, res, next) {

  const Model = model("User");

  const { txtFirstName: firstName = "", txtLastName: lastName = "", txtEmail: email = "" } = req.body;

  if (firstName.length * lastName.length * email.length !== 0) {

    const user = new Model({ firstName: firstName, lastName: lastName, email: email });

    await user.save();
  }
  res.redirect("/");
});

/* POST user listing. */
router.post('/update/:id', async function (req, res, next) {

  const Model = model("User");

  const { txtFirstName: firstName = "", txtLastName: lastName = "", txtEmail: email = "" } = req.body;

  if (firstName.length * lastName.length * email.length !== 0) {

    await Model.findByIdAndUpdate(req.params.id, { firstName, lastName, email });

  }
  res.redirect("/");
});

module.exports = router;
