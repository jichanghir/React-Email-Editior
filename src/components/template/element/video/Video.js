import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Video extends Component {
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
)(Video)
