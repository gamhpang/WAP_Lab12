const express = require('express');
const path = require('path');
const { nextTick } = require('process');

const options = {
    "caseSensitive":false,
    "strict":false,
}

const router = express.Router(options);

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})
router.get('/add-products',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
})

router.post('/products',(req,res,next)=>{
    res.send(req.body);
})

module.exports = router;