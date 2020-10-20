//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Here we can write our daily Journals. We can add the heading and the content below.";
const aboutContent = "This page was created with the idea of writing our everyday schedule, our thoughts, motivation and the things we achieved at the end of the day..";
const contactContent = "asdcsdvdfbbdvfdbfbdvsdfa";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts = [];

app.get("/", function(req,res){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
    });

});

app.get("/about", function(req,res){
    res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req,res){
    res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req,res){
    res.render("compose");
});

app.post("/compose", function(req,res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);
  res.redirect("/");
})







app.listen(3000, function() {
  console.log("Server started on port 3000");
});
