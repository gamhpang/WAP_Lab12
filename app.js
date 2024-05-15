const express = require('express');
const path = require('path');

const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'static','css')));
app.use(productRouter);
app.use(userRouter);

app.use(function(err,req,res,next){
    res.status(500).send("Internal Server error!");
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})