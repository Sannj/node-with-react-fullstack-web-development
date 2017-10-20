const express = require('express'); //using common js modules on server side. 
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passport.use(new GoogleStrategy()); //assigning a new Google Strategy to passport. 

const PORT = process.env.PORT || 5000; //listen to the port given as the env variable or default to 5000
app.listen(PORT);
