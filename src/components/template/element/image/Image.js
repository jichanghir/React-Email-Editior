import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Image extends Component {
    static propTypes = {
        element: PropTypes.object.isRequired
    };
    // static defaultProps = {};

    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // };
    // componentWillReceiveProps(nextProps) {};
    // shouldComponentUpdate(nextProps, nextState) {};
    // componentWillMount() {};
    // componentWillUpdate(nextProps, nextState) {};
    render() {
        const { element } = this.props;
        return (
          <div
            className="element"
            data-id={element.id}
            style={{
                paddingLeft: element.data.paddingLeft,
                paddingRight: element.data.paddingRight,
                paddingTop: element.data.paddingTop,
                paddingBottom: element.data.paddingBottom,
                textAlign: element.data.align
            }}
          >
            {element.data.src && <img
                src={element.data.src}
                alt={element.data.alt}
                style={{
                    width: element.data.width,
                    borderRadius: element.data.borderRadius
                }}
            />}
            {
                // todo: сделать менеджер картинок
            }
            {!element.data.src && <div>
                <div>Загрузить картинку</div>
            </div>}
          </div>
        );
    };
    // componentDidMount() {};
    // componentDidUpdate(prevProps, prevState) {};
    // componentWillUnmount() {};
    // componentDidCatch(error, info) {};

}

export default connect(
    state => ({
        // state: state
    }),
    (dispatch, ownProps) => ({
        // fname: (data) => {
        //     dispatch(fname(data));
        // }
    })
)(Image)
