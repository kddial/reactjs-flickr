var React = require('react');
var Search = require('../components/Search');
var flickrHelper = require('../utils/flickrHelper');
var ImageGridContainer = require('../containers/ImageGridContainer');
var SortByMenuContainer = require('../containers/SortByMenuContainer');


var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  photoSearch: function(sortOption) {

    this.setState({
      beginSearch: true,
      isLoading: true,
      error: false
    })

    flickrHelper.getFlickrPhotoSearch(this.state.query, sortOption.id)
      .then(function(result) {
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
  getInitialState: function() {
    return {
      query: "",
      sortOption: {
        id: "relevance",
        title: "Relevance"
      },
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

    this.photoSearch(this.state.sortOption);
  },
  handleUpdateSortOption: function(chosenSortOption) {
    this.setState({
      sortOption: chosenSortOption
    });

    if (this.state.beginSearch) {
      this.photoSearch(chosenSortOption);
    }
  },
  render: function() {
    return (
      <div>
        <Search 
          onSubmitQuery={this.handleSubmitQuery}
          onUpdateQuery={this.handleUpdateQuery}
          query={this.state.query} />
        <SortByMenuContainer 
          sortOption={this.state.sortOption}
          onUpdateSortOption={this.handleUpdateSortOption} />
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
