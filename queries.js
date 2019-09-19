/* Add all the required libraries*/
var Listing = Listing = require('./ListingSchema.js')
var config =  config = require('./config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(config.db.uri, {useNewUrlParser: true});

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  Listing.findOne({ 'name': 'Library West' }, 'name code address coordinates', function (err, listing) {
    if (err) return handleError(err);
    console.log(listing);
  });
};
var removeCable = function() {
  Listing.findOneAndDelete({code: "CABL"},function(err,listing){
    if(err) throw error;
    console.log(listing);
    });
  
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
  Listing.updateOne({code: "PHL"},{address: "1953 Museum Rd, Gainesville, FL 32603"},function(err,listing){
    if(err) throw error;
  });

  Listing.find({code:"PHL"}, function(err,listing){
    if(err) throw err;
    console.log(listing);
  });
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  Listing.find({},function(err,listing){
      if (err) throw error;
      console.log(listing);
  });
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
