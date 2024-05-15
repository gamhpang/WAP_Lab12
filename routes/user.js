const express = require('express');
const path = require('path');

const options = {
    "caseSensitive":false,
    "strict":false,
}

const router = express.Router(options);

router.get('/add-users',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-user.html'));
})

router.post('/users',(req,res,next)=>{
    res.send(req.body);
})

module.exports = router;