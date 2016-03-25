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
  getFlickrPhotoSearch: function(value, sortOption) {
    var url = flickrAddMethod("flickr.photos.search");
    url = flickrAddArg(url, "sort", sortOption); // sort option
    url = flickrAddArg(url, "text", value); // text search
    url = flickrAddArg(url, "per_page", "50"); // 50 per page

    console.log("Calling: " + url);
    return axios.get(url)
      .then(function(result) {
        return result;
      }).catch(function(err) {
        console.warn('Error in getFlickrPhotoSearch', err);
      });
  },
  getFlickrPhotoSourceUrl: function(imgObj) {
    var size = "q" // large square 150x150
    var url = "https://farm" + imgObj.farm 
      + ".staticflickr.com/" + imgObj.server 
      + "/" + imgObj.id + "_" + imgObj.secret 
      + "_" + size + ".jpg"

    return url
  },
  parsePhotoSources: function(photos) {
    return photos.map(function(imgObj) {
      return helpers.getFlickrPhotoSourceUrl(imgObj);
    });
  }
};


module.exports = helpers;