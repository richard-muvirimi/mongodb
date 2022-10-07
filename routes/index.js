var express = require('express');
var router = express.Router();

const { model } = require('mongoose');

/* GET home page. */
router.get('/', async function (req, res, next) {

  const Model = model("User");

  const users = await Model.find({});

  res.render('index', { title: 'Users Demo', users: users });
});

/* GET add page. */
router.get('/add', async function (req, res, next) {

  res.render('add', { title: 'Add User' });
});

/* GET edit page. */
router.get('/edit/:id', async function (req, res, next) {

  const Model = model("User");

  try {
    const user = await Model.findById(req.params.id);

    res.render('edit', { title: 'Edit User: ' + user.firstName + " " + user.lastName, user: user });
  } catch (error) {
    res.render('error', { message: "Error", error: error });
  }
});

/* GET view page. */
router.get('/view/:id', async function (req, res, next) {

  const Model = model("User");

  try {
    const user = await Model.findById(req.params.id);

    res.render('view', { title: 'View User: ' + user.firstName + " " + user.lastName, user: user });
  } catch (error) {
    res.render('error', { message: "Error", error: error });
  }
});

module.exports = router;
