const express = require('express');
const path = require("path");
const hbs = require("hbs");
const app = express();

// to host the post number if local host then 3000 if not then jis system pr run hoga uska port
const port = process.env.PORT || 8000;

//public static path
const staticPath = path.join(__dirname,"../public");
const partialPath = path.join(__dirname,"../templates/partials");
const templatePath = path.join(__dirname,"../templates/views");


// to use the static path
app.use(express.static(staticPath));
app.set("view engine",  "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialPath);
app.set('partials',partialPath)

                    // routing 
// home page
app.get("",(req,res) => {
    // res.send("wel come to my new page");
    // after use the views engine
    res.render('index');
});

//about page
app.get("/about",(req,res) => {
    // res.send("wel come to my about page");
    res.render('about');
});

// redirect home page
app.get("/index",(req,res) => {
    // res.send("wel come to my about page");
    res.render('index');
});

//weather page
app.get("/weather",(req,res) => {
    // res.send("wel come to my weather page");
    res.render('weather');
});

//if page is not exist
app.get("*",(req,res) => {
    errmsg = "Oops! page not found , click here to go back";
    res.render('404error');
});

app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
});