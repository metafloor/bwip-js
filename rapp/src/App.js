import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// ./bwip-js is symlinked to develop
// Search MRW in node_modules\react-dev-utils\ModuleScopePlugin.js that allows
// this to work (symlinks don't work with react).
import bwipjs from './bwip-js/browser-bwipjs';

class App extends Component {
  componentDidMount() {
    bwipjs('mycanvas', {
            bcid:        'code128',       // Barcode type
            text:        '0123456789',    // Text to encode
            scale:       3,               // 3x scaling factor
            height:      10,              // Bar height, in millimeters
            includetext: true,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
        }, function (err, cvs) {
            if (err) {
                // Decide how to handle the error
                // `err` may be a string or Error object
				console.log(err.stack || err);
            } else {
                // Nothing else to do in this example...
            }
        });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <canvas id="mycanvas"></canvas>
      </div>
    );
  }
}

export default App;
