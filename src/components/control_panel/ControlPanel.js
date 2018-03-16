import React, { Component } from 'react';
import { connect } from 'react-redux';

import Blocks from 'components/control_panel/blocks/Blocks';

import './control-panel.css';

class ControlPanel extends Component {

  render() {
    return (
      <div className="control-panel">
        <Blocks />
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    // block: state.blocks.find((block) => block.id === ownProps.id)
  }),
  (dispatch) => ({
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
)(ControlPanel);
