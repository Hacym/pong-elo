var m = require("mithril")

var Header = require("./components/Header");
var UserMatches = require("./components/UserMatches");

m.render(document.getElementById("header"), m(Header, {"mobileMenuActive": false}));

var root = document.getElementById("app");

m.route(root, "/", {
    "/": UserMatches
})