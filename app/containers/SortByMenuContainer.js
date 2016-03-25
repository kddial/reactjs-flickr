var React = require('react');
var PropTypes = React.PropTypes;
var SortByMenu = require('../components/SortByMenu');

var SortByMenuContainer = React.createClass({
  propTypes: {
  },
  getInitialState: function() {
    return {
      sortOptions: [
        {
          id: "relevance",
          title: "Relevance"
        },
        {
          id: "date-posted-asc",
          title: "Date posted (asc)"
        },
        {
          id: "date-posted-desc",
          title: "Date posted (desc)"
        },
        {
          id: "date-taken-asc",
          title: "Date taken (asc)"
        },
        {
          id: "date-taken-desc",
          title: "Date taken (desc)"
        },
        {
          id: "interestingness-desc",
          title: "Interestingness (desc)"
        },
        {
          id: "interestingness-asc",
          title: "Interestingness (asc)"
        }
      ]
    }
  },
  render: function() {
    return (
      <SortByMenu 
        sortOption={this.props.sortOption} 
        sortOptions={this.state.sortOptions} 
        onUpdateSortOption={this.props.onUpdateSortOption} />
    )
  }

});

SortByMenuContainer.propTypes = {
  sortOption: PropTypes.object.isRequired,
  onUpdateSortOption: PropTypes.func.isRequired
}

module.exports = SortByMenuContainer;