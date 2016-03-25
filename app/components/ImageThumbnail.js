var React = require('react');
var PropTypes = React.PropTypes;


var styles = {
  border : "none"
}

function ImageThumbnail (props) {
  return (

    <div className="col-xs-6 col-md-3">
      <a href="#" className="thumbnail" onClick={props.onImageView.bind(null, props.imgObj)} style={styles}>
        <img className="img-responsive img-rounded" src={props.imgObj.url} />
        <div>{props.imgObj.title} </div>
      </a>
    </div>

  )
}

ImageThumbnail.propTypes = {
  imgObj: PropTypes.object.isRequired,
  onImageView: PropTypes.func.isRequired
}

module.exports = ImageThumbnail;