var React = require('react');
var PropTypes = React.PropTypes;
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var SplitButton = require('react-bootstrap/lib/SplitButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var styles = require('../styles/styles');

function SortByMenuItem (props) {
  return (
    <MenuItem onClick={props.onUpdateSortOption.bind(null, props.item)}>{props.item.title}</MenuItem>
  )
};
SortByMenuItem.propTypes = {
  item: PropTypes.object.isRequired
}

function SortByMenu (props) {
  return (
    <div className="col-md-12 text-center center-block" style={styles.spaceBot}>
      <div className="">
        <SplitButton bsSize="small" title={props.sortOption.title} id="SortByMenuDropDown">
          {props.sortOptions.map(function(childSortOption) {
            return (<SortByMenuItem key={childSortOption.id} item={childSortOption} onUpdateSortOption={props.onUpdateSortOption}/>);
          })}
        </SplitButton>
      </div>
    </div>

  )
};

SortByMenu.propTypes = {
  sortOption: PropTypes.object.isRequired,
  sortOptions: PropTypes.array.isRequired,
  onUpdateSortOption: PropTypes.func.isRequired
};

module.exports = SortByMenu;