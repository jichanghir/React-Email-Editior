import React, { Component } from 'react';
import { connect } from 'react-redux';

import Text from './text/Text';
import Image from './image/Image';
import Button from './button/Button';
import Separator from './separator/Separator';
import Video from './video/Video';
import Socials from './socials/Socials';

class Element extends Component {

  render() {
    const type = this.props.element ? this.props.element.type : null;

    switch (type) {
      case 1 : return <Text element={this.props.element}/>;
      case 2 : return <Image element={this.props.element}/>;
      case 3 : return <Button element={this.props.element}/>;
      case 4 : return <Separator element={this.props.element}/>;
      case 5 : return <Video element={this.props.element}/>;
      case 6 : return <Socials element={this.props.element}/>;
      default : return <div></div>
    }
  }
}

export default connect(
  (state, ownProps) => ({
    element: state.elements.find((element) => element.id === ownProps.id)
  }),
  dispatch => ({
    // addTrack: (trackName) => {
    //   dispatch(addTrack(trackName))
    // },
    // findTrack: (trackName) => {
    //   dispatch(findTrack(trackName))
    // },
    // getTracks: () => {
    //   dispatch(getTracks());
    // }
  })
)(Element);
