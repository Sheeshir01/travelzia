const express = require("express");
const Detail = require("../models/Detail");

const routes = express.Router();

routes.get("/", async (req, res) => {
    const details = await Detail.find({
        "type": "email"
    });
    console.log(details);
    res.render("index");
})

routes.post("/addSubscriber", (req, res) => {
    const { mail } = req.body;
    Detail.create({
        type: "email",
        email: mail
    })
    res.redirect("/")
})

module.exports = routes;