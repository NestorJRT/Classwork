const express = require('express');
const path = require('path');

const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "html"));

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

const names = [];
const tasks = [];


app.get("/", (req, res) => {
    res.render("index.html", { names,
        tasks,
        error: null,
        newName: null
    });
});

app.get("/greet", (req, res) => {
    const name = req.query.name;
    console.log(name);
    names.push(name);
    
    res.render("index.html", { 
        names,
        tasks,
        error: null,
        newName: name
    });
});

app.get("/greet/:index", (req, res, next) => {
    const index = Number(req.params.index);
    
    if (!Number.isInteger(index) || index < 0 || index >= names.length) {
        return next(new Error("That name, does not exist"));
    }
    
    res.render("wazzup.html", { name: names[index] });
});

app.post("/task", (req, res) => {
    tasks.push(req.body.task);
    res.redirect("/");
});

app.post("/task/:index/delete", (req, res) => {
    const index = Number(req.params.index);
    
    if (Number.isInteger(index) && index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
    
    res.redirect("/");
});

app.post("/task/:index/up", (req, res) => {
    const index = Number(req.params.index);
    
    if (Number.isInteger(index) && index > 0 && index < tasks.length) {
        [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
    }
    
    res.redirect("/");
});

app.post("/task/:index/down", (req, res) => {
    const index = Number(req.params.index);
    
    if (Number.isInteger(index) && index >= 0 && index < tasks.length - 1) {
        [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    }
    
    res.redirect("/");
});

app.get("/task", (req, res) => {
    res.json(tasks);
});

app.put("/greet/:name", (req,res) => {
    names.push(req.params.name);
    res.json(names);
});

app.use((err, req, res, next) => {
    res.status(400).render("index.html", {
        names,
        tasks,
        error: err.message
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});