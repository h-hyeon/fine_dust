import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityDetail extends Component {
  render() {
    // if (!this.props.selected) {
    //   return <div> No City Selected </div>;
    // }
    return (
      <div className='list-group col-sm-8'>
        {console.log(this.props.selected.city.name)}
        {/* {this.props.selected.city.name} */}
      </div>
    );
  }
}

function mapStateToProps({selected}) {
  return {
    selected: selected
  };
}

export default connect(mapStateToProps)(CityDetail);