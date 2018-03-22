import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sortable from 'react-sortablejs';

import Element from 'components/template/element/Element';
import { startSortingElements, endSortingElements, addElement } from 'actions/columns';

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
              // на onStart должны сначала удалить элемент с состояния
              onStart: (e) => {
                const fromColumnId = +e.from.closest('.column').dataset.id;
                const elemId = +e.item.dataset.id;

                this.props.startSortingElements({
                  fromColumnId,
                  elemId
                });
              },
              // Element is dropped into the list from another list
              onAdd: (e) => {
                const toColumnId = +e.to.closest('.column').dataset.id;
                const elemId = +e.item.dataset.id;
                const newIndex = +e.newIndex;

                // При сортироке уже есть elemId
                if (elemId) {
                  this.props.endSortingElements({
                    toColumnId,
                    elemId,
                    newIndex
                  });
                }
                // При добавлении нового нету elemId
                else {
                  this.props.addElement({
                    toColumnId,
                    newIndex,
                    type: +e.clone.dataset.type
                  })
                }
                
                // Удаляем дублирующийся элемент из ДОМ дерева
                e.item.remove();
              },
              // Changed sorting within list
              onUpdate: (e) => {
                const toColumnId = +e.to.closest('.column').dataset.id;
                const elemId = +e.item.dataset.id;
                const newIndex = +e.newIndex;

                this.props.endSortingElements({
                  toColumnId,
                  elemId,
                  newIndex
                });
                // Удаляем дублирующийся элемент из ДОМ дерева
                e.item.remove();
              }
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
    startSortingElements: (data) => {
      dispatch(startSortingElements(data))
    },
    endSortingElements: (data) => {
      dispatch(endSortingElements(data))
    },
    addElement: (data) => {
      dispatch(addElement(data))
    }
  })
)(Column);
