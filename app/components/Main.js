var React = require('react');
var styles = require('../styles/styles');

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container jumbotron col-sm-12 text-center' style={styles.transparentBg}>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
