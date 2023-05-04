const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../db.js');
const jwt = require('jsonwebtoken');

const mypassword = 'a123456789';

router.post('/signin', async (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);

  const oneUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  try {
    const comp = await bcrypt.compare(req.body.password, oneUser.password);
    if (comp) {
      jwt.sign(payload, secret, {expiresIn: '1m'}, (err, token) => {
        if (err instanceof jwt.TokenExpiredError) {
          // JWT의 유효기간이 만료된 경우
          return res
            .status(401)
            .send('Token expired. Please renew your token.');
        }
      });
    } else {
      res.json(419);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
