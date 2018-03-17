import React, { Component } from 'react';
import { connect } from 'react-redux';

import Column from 'components/template/column/Column';

import './block.css';

class Block extends Component {

  render() {
    const { block } = this.props;

    return (
      <div 
        className='block'
      >
        {block.columns.map((columnID) => 
          <Column 
            key={`column-${columnID}`}
            id={columnID}
          />
        )}
        <div className="block__handle">sort</div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    block: state.blocks.find((block) => block.id === ownProps.id)
  }),
  (dispatch) => ({

  })
)(Block);
