var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

router.get('/index', function(req, res, next) {
  res.render("index");
});

router.get('/add-prescription', function(req, res, next) {
  res.render("add-prescription");
});

router.get("/appointments", function(req,res){
  res.render("appointments");
})

router.get("/booking-success", function(req,res){
  res.render("booking-success");
})

router.get("/booking", function(req,res){
  res.render("booking");
})

router.get("/checkout", function(req,res){
  res.render("checkout");
})

router.get("/doctor-dashboard", function(req,res){
  res.render("doctor-dashboard");
})

router.get("/doctor-profile-settings", function(req,res){
  res.render("doctor-profile-settings");
})

router.get("/doctor-profile", function(req,res){
  res.render("doctor-profile");
})

router.get("/edit-prescription", function(req,res){
  res.render("edit-prescription");
})

router.get("/login", function(req,res){
  res.render("login");
})

router.get("/my-patients", function(req,res){
  res.render("my-patients");
})

router.get("/patient-dashboard", function(req,res){
  res.render("patient-dashboard");
})

router.get("/patient-profile", function(req,res){
  res.render("patient-profile");
})

router.get("/profile-settings", function(req,res){
  res.render("profile-settings");
})

router.get("/register", function(req,res){
  res.render("register");
})

router.get("/schedule-timings", function(req,res){
  res.render("schedule-timings");
})

router.get("/search", function(req,res){
  res.render("search");
})






module.exports = router;
