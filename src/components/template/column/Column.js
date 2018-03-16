import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sortable from 'react-sortablejs';

import Element from 'components/template/element/Element';
import { sortElement } from 'actions/elements';

import './column.css';

class Column extends Component {

  render() {
    const { column } = this.props;
    const emptyClass = !column.elements.length ? 'empty' : '';

    return (
      <div 
        className={`column ${emptyClass}`}
        data-id={column.id}
      >
        <Sortable
            options={{
              group: {
                name: 'element',
                pull: true,
                put: true
              },
              sort: true,
              onAdd: (e) => {
                console.log('onSort', e);
                
                const fromColumnId = column.id;
                const toColumnId = e.to.closest('.column').dataset.id;
                const elemId = e.item.dataset.id;

                e.item.remove();
                this.props.sortElement({
                  fromColumnId, 
                  toColumnId,
                  elemId
                });
              },
              onUpdate: (e) => {
                console.log('onUpdate', e);

                const fromColumnId = column.id;
                const toColumnId = e.to.closest('.column').dataset.id;
                const elemId = e.item.dataset.id;

                e.item.remove();
                this.props.sortElement({
                  fromColumnId, 
                  toColumnId,
                  elemId
                });
              },
            }}
            className="c-sortable"
        >
          {column.elements.map((elementID) => 
            <Element 
              key={`element-${elementID}`}
              id={elementID}
            />
          )}
        </Sortable>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    column: state.columns.find((column) => column.id === ownProps.id)
  }),
  dispatch => ({
    sortElement: (data) => {
      dispatch(sortElement(data))
    },
  })
)(Column);
