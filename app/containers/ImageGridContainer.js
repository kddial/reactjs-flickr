var React = require('react');
var PropTypes = React.PropTypes;
var ImageGrid = require('../components/ImageGrid');
var flickrHelper = require('../utils/flickrHelper');

var ImageGridContainer = React.createClass({
  propTypes: {
    beginSearch: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    photos: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <div className="col-md-12">
        <ImageGrid 
          beginSearch={this.props.beginSearch}
          isLoading={this.props.isLoading}
          photos={flickrHelper.parsePhotoSources(this.props.photos)}
          error={this.props.error} />
      </div>
    );

  }

});

module.exports = ImageGridContainer;