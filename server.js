var express = require("express");
var handlebars = require("express-handlebars");

var app = express();

const hbs = handlebars.create({
    defaultLayout: 'index', 
	extname: 'hbs'
});

app.use(express.static(__dirname + "/public"));
app.engine('hbs', hbs.engine);
app.set('views', './views');
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    //res.sendFile("index.html");
    res.render("main", {title: "Головна сторінка"});
});

app.listen(3000, () => {
    console.log("Server is running!");
})
