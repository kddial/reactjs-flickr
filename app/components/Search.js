var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/styles');

function Search (props) {
  return (
    <div className="col-md-8 col-md-offset-2 text-center" style={styles.space}>
      <div className="col-md-12">

        <form className="form" onSubmit={props.onSubmitQuery}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Search images"
              type="text" 
              onChange={props.onUpdateQuery}
              value={props.query}
              />
          </div>
          <button 
            className="btn btn-info"
            type="submit">
            Search
          </button>
        </form>
        <br/>

      </div>
    </div>
  )
};

Search.propTypes = {
  onSubmitQuery: PropTypes.func.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};


module.exports = Search;