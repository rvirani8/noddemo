var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../Models/userSchema');

/* GET home page. */
router.post('/ins', async function(req, res, next) {
 
      try {
        
        const newuser = await User.create(req.body);


        res.status(200).json({
            status:"success",
            data:newuser
        })

      } catch (error) {
        
      }


});

module.exports = router;
