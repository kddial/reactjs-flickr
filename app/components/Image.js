var React = require('react');
var PropTypes = React.PropTypes;


var styles = {
  border : "none"
}

function Image (props) {
  return (

    <div className="col-xs-6 col-md-3">
      <a href="#" className="thumbnail" style={styles}>
        <img className="img-responsive img-rounded" src={props.url} />
      </a>
    </div>

  )
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
}

module.exports = Image;