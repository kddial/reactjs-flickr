var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
  },
  content: {
    textAlign: 'center',
    width: '100%',
    marginTop: '20px',
    fontSize: "12px"
  }
}


var Loading = React.createClass({
  propTypes: {
    speed: PropTypes.number,
    text: PropTypes.string
  },
  getDefaultProps: function() {
    return {
      text: "Loading",
      speed: 400
    }
  },
  getInitialState: function() {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  componentDidMount: function() {
    var stopper = this.originalText + "...";
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + "."
        })

      }
    }.bind(this), this.props.speed);

  },
  componentWillUnmount: function() {
    clearInterval(this.interval);

  },
  render: function() {
    return (
      <div className="col-md-12 text-center" styles={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )

  }
});


module.exports = Loading;