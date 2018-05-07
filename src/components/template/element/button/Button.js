import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Button extends Component {
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
            <a
                href={element.data.href}
                style={{
                    width: element.data.width,
                    lineHeight: element.data.height,
                    backgroundColor: element.data.backgroundColor,
                    borderRadius: element.data.borderRadius,
                    color: element.data.color,
                    fontSize: element.data.fontSize,
                    fontFamily: element.data.fontFamily,
                    fontWeight: element.data.fontWeight,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'inline-block'
                }}
            >
                {element.data.text}
            </a>
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
)(Button)
