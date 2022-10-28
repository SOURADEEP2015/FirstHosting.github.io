const express = require("express");
const app = express();
const path = require("path")
const hbs = require("hbs")
const staticPath = path.join(__dirname, "../public")
    //built in middleware to serve static html file
    //app.use(express.static(staticPath));

//to set the view engine
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../Templates/views"))
    //Registering patial to the template engine
const partialPath = path.join(__dirname, "../Templates/partials")
hbs.registerPartials(partialPath);
//template engine route
const viewIndexPath = path.join(__dirname, "../Templates/views/index")
const viewAboutPath = path.join(__dirname, "../Templates/views/about")
app.get("/", (req, res) => {
    res.render("index", {
        userName: 'Souradip'
    });
})
app.get("/about", (req, res) => {
        res.render("about");
    })
    //this astric sign applies on those url for which the routes is not mentioned above 
app.get("/about/*", (req, res) => {
    res.send("404 error page. This page is not exist ubder About Screen")
})
app.get("*", (req, res) => {
        res.send("404 error page")
    })
    //simple express routing
    //console.log(path.join(__dirname, "../public"));
    // app.get("/", (req, res) => {
    //     res.send("Hello from the EXPRESS!!")
    // });
    // app.get("/about", (req, res) => {
    //     res.send("About Screen the EXPRESS!! ")
    // });

app.listen(8000, "127.0.0.1", () => {
    console.log('I am Listening at 8000')
})