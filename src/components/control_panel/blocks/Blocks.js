import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sortable from 'react-sortablejs';

import './cp-blocks.css';

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
            sort: false
          }}
        >
          <div data-type='1' className="cp-blocks__block">One column</div>
          <div data-type='2' className="cp-blocks__block">Two columns</div>
          <div data-type='3' className="cp-blocks__block">Three columns</div>
          <div data-type='4' className="cp-blocks__block">Four columns</div>
        </Sortable>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({

  }),
  (dispatch) => ({

  })
)(Blocks);
