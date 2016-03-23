var axios = require('axios');
var apiKey = "801b7a2c6ce44b8fa7b9045dc42a4c82";
var secret = "8076dbfaa7d4185f";
var flickrREST = "https://api.flickr.com/services/rest/?api_key=" + apiKey + "&format=json" + "&nojsoncallback=1";

function flickrAddMethod(method) {
  return flickrREST + "&method=" + method;
}

function flickrAddArg(url, arg, value) {
  return url + "&" + arg + "=" + value;
}


/*
https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value

https://api.flickr.com/services/rest/?
method=flickr.photos.search
&api_key=4b0bdadcb57c0e8bac7dd9fa85d3a8de
&tags=panda
&format=json
&nojsoncallback=1
&api_sig=a295b347ebe7557e30ae58012648e2f0
*/


var helpers = {
  getFlickrEcho: function(value) {
    var url = flickrAddMethod("flickr.test.echo");
    url = flickrAddArg(url, "name", value);

    return axios.get(url)
      .then(function(result) {
        return result.data.name._content;
      }).catch(function(err) {
        console.warn('Error in getFlickrEcho', err);
        return err;
      });
  }, 
  getFlickrPhotoSearch: function(value) {
    var url = flickrAddMethod("flickr.photos.search");
    url = flickrAddArg(url, "tags", value); // tag search
    url = flickrAddArg(url, "text", value); // text search

    return axios.get(url)
      .then(function(result) {
        return result;
      }).catch(function(err) {
        console.warn('Error in getFlickrPhotoSearch', err);
      });

  }
};


module.exports = helpers;