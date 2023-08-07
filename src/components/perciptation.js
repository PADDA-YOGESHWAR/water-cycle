import React, { Component } from 'react';
//import logo from './logo.svg';
//import vpr from './images/vapour.png';

import './perciptation.css';

class Precipitation extends Component {
  render() {
    return (
      <>
	<div id="precipitation" class="info-block precipitation">
      <h2>Precipitation</h2>
      <p>
        Condensed water vapor that falls to the Earth's surface. Most precipitation occurs as rain, but also includes snow, hail, fog drip, graupel, and sleet.
      </p>
    </div>
      </>
    );
  }
}

export default Precipitation;