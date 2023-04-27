const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../db.js');

router.get('/count', async (req, res) => {
  const count = await User.count().catch(e => {
    console.log(e);
  });
  res.json(count);
});

router.get('/list/:page?', async (req, res) => {
  console.log(req.params.page);
  const limit = 5;
  const offset = (parseInt(req.params.page) - 1) * limit;
  const users = await User.findAll({
    limit,
    offset,
    order: [['id', 'desc']],
  });
  res.json(users);
});

router.post('/insert', async (req, res) => {
  const {name, email, password} = req.body;
  let hash = await bcrypt.hash(password, 12);
  try {
    await User.create({
      name: name,
      email: email,
      password: hash,
    })
      .then(() => {
        return res.status(200).json({message: 'db insert 성공'});
      })
      .catch(e => {
        console.log(e);
        return res.status(500).json({message: 'db insert 실패'});
      });
  } catch (e) {
    console.log(e);
    return res.status(500).json({message: 'db insert 실패'});
  } finally {
  }
});

module.exports = router;