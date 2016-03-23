var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles/HomeStyles');


var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Search Flickr</h1>
        <p className="lead">lets get it</p>

        <Link to='/test'>
          <button type="button" className="btn btn-lg btn-success"> Test </button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;