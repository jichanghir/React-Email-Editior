import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sortable from 'react-sortablejs';

import './cp-elements.css';

class Elements extends Component {

  render() {
    return (
      <div className="cp-elements">
        <Sortable
          options={{
            group: {
              name: 'element',
              pull: 'clone',
              put: false
            },
            sort: false
          }}
        >
          <div data-type='1' className="cp-elements__item">Текст</div>
          <div data-type='2' className="cp-elements__item">Картинка</div>
          <div data-type='3' className="cp-elements__item">Кнопка</div>
          <div data-type='4' className="cp-elements__item">Разделитель</div>
          <div data-type='5' className="cp-elements__item">Видео</div>
          <div data-type='6' className="cp-elements__item">Соц сети</div>
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
)(Elements);
