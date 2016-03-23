var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles/HomeStyles');


var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Test</h1>
        <p className="lead">smd</p>

        <Link to='/'>
          <button type="button" className="btn btn-lg btn-success"> Go back home bro </button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;