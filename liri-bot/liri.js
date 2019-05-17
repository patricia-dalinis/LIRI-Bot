// Code to read and set any environment variables with the dotenv package
require("dotenv").config();

// Import the keys.js file
var keys = require("./keys.js");

// Access your keys information
var spotify = new Spotify(keys.spotify);