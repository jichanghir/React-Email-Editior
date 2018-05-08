import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Socials extends Component {
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
            {element.data.socials.map((social) =>
                <div
                    style={{
                        marginLeft: +element.data.innerPadding / 2,
                        marginRight: +element.data.innerPadding / 2,
                        display: 'inline-block'
                    }}
                >
                    <img
                        src={social.srcs[element.data.style]}
                        style={{
                            width: element.data.width
                        }}
                        alt=""
                    />
                </div>
            )}
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
)(Socials)
