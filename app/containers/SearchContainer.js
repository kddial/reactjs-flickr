var React = require('react');
var Search = require('../components/Search');
var flickrHelper = require('../utils/flickrHelper');


var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      query: ''
    }
  },
  handleUpdateQuery: function(event) {
    this.setState({
      query: event.target.value
    });
  },
  handleSubmitQuery: function(e) {
    e.preventDefault();
    console.log("loading...");

    flickrHelper.getFlickrEcho(this.state.query)
      .then(function(result) {
        console.log("flickr echo: " + result);

      });


  },
  render: function() {
    return (
      <Search 
        onSubmitQuery={this.handleSubmitQuery}
        onUpdateQuery={this.handleUpdateQuery}
        query={this.state.query} />
    )
  }
});

module.exports = SearchContainer;
