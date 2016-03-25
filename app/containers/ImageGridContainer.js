var React = require('react');
var PropTypes = React.PropTypes;
var ImageGrid = require('../components/ImageGrid');
var flickrHelper = require('../utils/flickrHelper');

var ImageGridContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleImageView: function(imgObj, e) {
    e.preventDefault();

    this.context.router.push('/image/' + imgObj.id);
    // this.context.router.push('/image/');
  },
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
          onImageView={this.handleImageView}
          error={this.props.error} />
      </div>
    );

  }

});

module.exports = ImageGridContainer;