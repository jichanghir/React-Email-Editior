import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sortable from 'react-sortablejs';

import Block from 'components/template/block/Block';
import { addBlock } from 'actions/blocks';

import './template.css';

class Template extends Component {

  render() {
    return (
      <div className="template">
        <Sortable
            options={{
              group: {
                name: 'block',
                pull: true,
                put: true
              },
              sort: true,
              onAdd: (e) => {
                e.item.remove();
                this.props.addBlock({type: e.clone.dataset.type, newIndex: e.newIndex})
              },
            }}
            className="c-sortable"
        >
          {this.props.blocks.map((block) => 
            <Block 
              key={`block-${block.id}`}
              id={block.id}
            />
          )}
        </Sortable>
      </div>
    );
  }
}

export default connect(
  state => ({
    blocks: state.blocks
  }),
  dispatch => ({
    addBlock: (data) => {
      dispatch(addBlock(data))
    },
  })
)(Template);
