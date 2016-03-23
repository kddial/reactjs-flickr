var React = require('react');
var Search = require('../components/Search');

var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      query: ''
    }
  },
  handleUpdateQuery: function(event) {
    this.setState({
      query: event.target.value
    });
  },
  handleSubmitQuery: function(e) {
    // prevent the default action of submit to occur
    e.preventDefault();

    // SOME MAGIC GOING ON HERE


    // cache player one username
    var username = this.state.username;
    this.setState({
      username: ""
    });

    if (this.props.routeParams.playerOne) {
      // on playerTwo. Go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });

    } else {
      // on playerOne. Go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },
  render: function() {
    return (
      <Search 
        onSubmitQuery={this.handleSubmitQuery}
        onUpdateQuery={this.handleUpdateQuery}
        query={this.state.query} />
    )
  }
});

module.exports = SearchContainer;
