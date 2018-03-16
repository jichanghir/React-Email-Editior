import React, { Component } from 'react';
import { connect } from 'react-redux';

class Element extends Component {

  render() {
    const { element } = this.props; 
    return (
      <div 
        className="element"
        data-id={element.id}
      >
        {element.content}
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    element: state.elements.find((element) => element.id === ownProps.id)
  }),
  dispatch => ({
    // addTrack: (trackName) => {
    //   dispatch(addTrack(trackName))
    // },
    // findTrack: (trackName) => {
    //   dispatch(findTrack(trackName))
    // },
    // getTracks: () => {
    //   dispatch(getTracks());
    // }
  })
)(Element);
