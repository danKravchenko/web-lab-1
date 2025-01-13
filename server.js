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
    res.render("main", {title: "Головна сторінка"});
});

app.get("/contacts", (req, res) => {
    res.render("contacts", {title: "Зв'язок зі мною"});
});

app.listen(3000, () => {
    console.log("Server is running!");
})
