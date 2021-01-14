import { connect } from 'react-redux';
import { Component } from 'react';

class Console extends Component {
    render() {

        const handleClick = () => {
            
            this.props.power ? 
                this.props.setPower(false) :
                this.props.setPower(true);

            const icon = document.querySelector('i');
            const display = document.querySelector('.display-console');
            const volume = document.getElementById('volume-display');
            const sound = document.getElementById('sound-display');
            const bank = document.getElementById('bank-display');

            icon.classList.toggle('power-off');
            display.classList.toggle('display-off');
            volume.classList.toggle('off');
            sound.classList.toggle('off');
            bank.classList.toggle('off');
        }

        const handleBank = e => {
            this.props.setBank(e.target.innerText);
        }

        const handleChange = e => {
            this.props.setVolume(e.target.value);
        
        }

        return (
            <div className="console">
                <header>
                    <h1>Drum Machine</h1>
                    <button className="power-btn" onClick={handleClick}>
                        <i className="fas fa-power-off"></i>
                    </button>
                </header>

                <div className="display-console">
                    <div id="bank-display">
                        Active Kit: {this.props.activeKit}
                    </div>
                    <div id="sound-display">
                        {this.props.currentPad}
                    </div>
                    <div id="volume-display">
                        Volume: {this.props.volume}%
                </div>
                </div>

                <div className="bank">
                    <button id="bank-a" className="bank-btn" onClick={handleBank}>
                        Bank A
                </button>
                    <button id="bank-b" className="bank-btn" onClick={handleBank}>
                        Bank B
                </button>
                </div>

                <div className="volume-control">
                    <label htmlFor="volume">Volume </label>
                    <input type="range" name="volume" min="0" max="100" value={this.props.volume} onChange={handleChange} />
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeKit: state.activeKit,
        currentPad: state.currentPad,
        volume: state.volume,
        power: state.power
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setVolume: volume => { dispatch({type: 'SET_VOLUME', volume}) },
        setBank: bank => { dispatch({type: 'SET_BANK', bank}) },
        setPower: power => { dispatch({ type: 'SET_POWER', power }) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Console);