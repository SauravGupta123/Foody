const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { query, validationResult, body, check } = require('express-validator');


//validation in 
const createuserValidation = () => [
   check('name').isLength({ min: 3 }).withMessage('Must be at least 10 chars long'),
   body('email').isEmail().withMessage('invalid email')
];


router.post('/createuser', createuserValidation(), async (req, res) => {
   const { name, email, password, location } = req.body;

   //if error found, it console.logs
   const result = validationResult(req);
   if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
   }

   //everything ok
   await User.create({name, email, password, location})
   res.json({ success: true });
})

router.get('/createuser', (req, res) => {
   res.json("get running");
})


module.exports = router;