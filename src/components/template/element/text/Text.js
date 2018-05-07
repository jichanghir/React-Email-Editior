import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Text extends Component {
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
                color: element.data.color,
                lineHeight: element.data.lineHeight,
                borderStyle: element.data.borderStyle,
                borderWidth: element.data.borderWidth,
                borderColor: element.data.borderColor,
                paddingLeft: element.data.paddingLeft,
                paddingRight: element.data.paddingRight,
                paddingTop: element.data.paddingTop,
                paddingBottom: element.data.paddingBottom,
            }}
          >
            {element.data.text}
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
)(Text)
