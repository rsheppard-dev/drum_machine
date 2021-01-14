import { Component } from 'react';
import DrumPad from './components/DrumPad';
import Console from './components/Console';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="container">
        <div id="display">
          <div className="pads-wrapper">
            {
            this.props.activeKit === 'Bank A' ?
            this.props.bankA.map((drumpad, index) => (
              <DrumPad key={index} drumpad={drumpad} />
              )) :
            this.props.bankB.map((drumpad, index) => (
              <DrumPad key={index} drumpad={drumpad} />
            ))
            }
          </div>
          <Console />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bankA: state.bankA,
    bankB: state.bankB,
    activeKit: state.activeKit
  };
}

export default connect(mapStateToProps)(App);