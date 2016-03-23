var React = require('react');
var PropTypes = React.PropTypes;
var ImageGrid = require('../components/ImageGrid');

var ImageGridContainer = React.createClass({
  propTypes: {
    beginSearch: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    photos: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <ImageGrid 
        beginSearch={this.props.beginSearch}
        isLoading={this.props.isLoading}
        photos={this.props.photos}
        error={this.props.error} />

    );

  }

});

module.exports = ImageGridContainer;