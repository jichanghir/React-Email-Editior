import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sortable from 'react-sortablejs';

import { addBlock } from 'actions/blocks';

class Blocks extends Component {

  render() {
    return (
      <div className="cp-blocks">
        <Sortable
            options={{
              group: {
                name: 'block',
                pull: 'clone',
                put: false
              },
              sort: false,
              // onStart: (e) => startSortPoints.call(null, e),
              // onAdd: (e) => sortAdd.call(null, e),
              // onUpdate: (e) => sortUpdate.call(null, e),
              // onEnd: (e) => this.props.addBlock(e.clone.dataset.type),
            }}
            // onChange={(order, sortable, evt) => {
            //   console.log('order', order);
            //   console.log('sortable', sortable);
            //   console.log('evt', evt);
            //     // this.props.addBlock(order);
            // }}
        >
          <div data-type='1'>some Block</div>
          <div data-type='2'>some Block</div>
          <div data-type='3'>some Block</div>
          <div data-type='4'>some Block</div>
        </Sortable>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    // block: state.blocks.find((block) => block.id === ownProps.id)
  }),
  (dispatch) => ({
    addBlock: (type) => {
      dispatch(addBlock(type))
    },
  })
)(Blocks);
