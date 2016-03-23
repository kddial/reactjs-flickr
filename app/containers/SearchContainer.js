var React = require('react');
var Search = require('../components/Search');
var flickrHelper = require('../utils/flickrHelper');
var ImageGridContainer = require('../containers/ImageGridContainer');


var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      query: '',
      beginSearch: false,
      isLoading: true,
      error: false,
      photos: []
    }
  },
  componentDidMount: function() {

    // Call flickr api on mount, to make consecutive calls faster
    flickrHelper.getFlickrEcho("Initialize flickr api")
      .then(function(result) {
        console.log(result);
      }).catch(function(err) {
        this.setState({
          error: true
        });
      }.bind(this));

  },
  handleUpdateQuery: function(event) {
    this.setState({
      query: event.target.value
    });
  },
  handleSubmitQuery: function(e) {
    e.preventDefault();

    this.setState({
      beginSearch: true,
      isLoading: true,
      error: false
    })

    flickrHelper.getFlickrPhotoSearch(this.state.query)
      .then(function(result) {
        console.log(result.data.photos.photo);
        this.setState({
          isLoading: false,
          photos: result.data.photos.photo
        })
      }.bind(this))
      .catch(function(err) {
        this.setState({
          error: true
        });
      }.bind(this));


  },
  render: function() {
    return (
      <div>
        <Search 
          onSubmitQuery={this.handleSubmitQuery}
          onUpdateQuery={this.handleUpdateQuery}
          query={this.state.query} />
        <ImageGridContainer 
          beginSearch={this.state.beginSearch}
          isLoading={this.state.isLoading}
          photos={this.state.photos} 
          error={this.state.error} />
      </div>
    )
  }
});

module.exports = SearchContainer;
