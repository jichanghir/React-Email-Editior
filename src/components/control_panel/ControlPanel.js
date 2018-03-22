import React, { Component } from 'react';
import { connect } from 'react-redux';

import Blocks from 'components/control_panel/blocks/Blocks';
import Elements from 'components/control_panel/elements/Elements';
import Tabs from 'components/ui/tabs/Tabs';

import { setCategory } from 'actions/controlPanel';

import './control-panel.css';

class ControlPanel extends Component {

  render() {
    return (
      <div className="control-panel">
        <Tabs 
          tabs={['structure', 'elements']} 
          selectedTab={this.props.selectedCategory} 
          onClick={(tabName) => this.props.setCategory(tabName)}
        />

        {this.props.selectedCategory === 'structure' && <Blocks />}
        {this.props.selectedCategory === 'elements' && <Elements />}
        
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    selectedCategory: state.controlPanel.selectedCategory
  }),
  (dispatch) => ({
    setCategory: (selectedCategory) => {
      dispatch(setCategory(selectedCategory))
    }
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
