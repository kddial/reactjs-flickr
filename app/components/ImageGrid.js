var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');

// Used to puke out preformatted text 
function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}


function ImageGrid (props) {
  if (props.error) {
    return (<div> Error occured. Check network connection and retry. </div>);

  } else {
    if (props.beginSearch) {
      return props.isLoading === true
      ? <Loading text={"Fetching images"}/>
      : <div>
          Image Grid
          {puke(props)}
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
  error: PropTypes.bool.isRequired
}

module.exports = ImageGrid;