import React, { Component } from 'react';

import Template from 'components/template/Template';
import ControlPanel from 'components/control_panel/ControlPanel';

import './app.css';
import 'stylesheets/main.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Template />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
