const express = require('express');
const app = express()

const {pool} = require('./dbconfig.js');

const port = process.env.port || 4000;

app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}))



app.get('/',(req,res)=>
{
    res.render("index");
});


app.get("/users/login",(req,res)=>
{
    res.render("login");

});

app.get('/users/register',(req,res)=>
{
    res.render("register");
});

app.get('/users/dashboard',(req,res)=>
{
    res.render("dashboard",{user : "nagul"});
});


app.post('/users/register',async(req,res)=>
{
    let{name,email,password,password2} = req.body;
    console.log({
        name,
        email,password,password2
    });

    pool.query(`INSERT INTO  login(name) VALUES('${name}')`, (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          return;
        }
        console.log('Query results:', results.rows);
      });
      

});

app.listen(port ,()=>
{
    console.log(`Server is running on ${port}`);
});

