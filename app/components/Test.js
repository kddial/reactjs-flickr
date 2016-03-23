var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
  render: function() {
    return (
      <div>
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