var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SearchContainer = require('../containers/SearchContainer');


var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Search Flickr</h2>

        <SearchContainer />
      </div>
    )
  }
});

module.exports = Home;