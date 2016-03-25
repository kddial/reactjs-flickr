var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var ImageThumbnail = require('./ImageThumbnail');

// Used to puke out preformatted text 
function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}


function ImageGrid (props) {
  if (props.error) {
    return (<div> 
              Error occured. Do not leave input field blank or check network connection and try again. 
            </div>);

  } else {
    if (props.beginSearch) {
      return props.isLoading === true
      ? <Loading text={"Fetching images"}/>
      : <div>
          <div className="row">
            {props.photos.map(function(imgObj) {
              return (<ImageThumbnail 
                        key={imgObj.id} 
                        imgObj={imgObj} 
                        onImageView={props.onImageView} />);
            })}
          </div>
        </div>
    } else {
      return (<div></div>);
    }
  }
}

ImageGrid.propTypes = {
  beginSearch: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired,
  onImageView: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
}

module.exports = ImageGrid;