import { Component } from 'react';
import { connect } from 'react-redux';

class DrumPad extends Component {
    render() {
        const { drumpad } = this.props;

        const handlePad = e => {
            let current = '';
            let id = '';
            let audio = document.getElementById(e);
            
            if (!audio) {
                id = e.target.firstElementChild.id; // onclick
                audio = document.getElementById(id);
            } else {
                id = e; // keydown
            }
            
            if (this.props.power) {
                if (this.props.activeKit === 'Bank A') {
                    current = this.props.bankA
                        .find(obj => obj.key === id);
                } else {
                    current = this.props.bankB
                        .find(obj => obj.key === id);
                }
                
                this.props.setCurrent(current.name);

                audio.volume = this.props.volume / 100;
                audio.currentTime = 0;
                audio.play();

                audio.parentElement.classList.add('active-drum');

                setTimeout(() => {
                    audio.parentElement.classList.remove('active-drum');
                }, 500);

                setTimeout(() => {
                    this.props.setCurrent(undefined);
                }, 2000);    
            }
        }

        document.addEventListener('keydown', e => {
            const keyMap = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
            const key = e.key.toUpperCase();
            // if keydown is a valid key activate drumpad
            if (keyMap.includes(key)) handlePad(key);
        });

        return (
            <div className="drum-pad" id={drumpad.name} onClick={handlePad}>
                <audio src={drumpad.sound} id={drumpad.key} className="clip"></audio>
                {drumpad.key}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bankA: state.bankA,
        bankB: state.bankB,
        activeKit: state.activeKit,        
        volume: state.volume,
        power: state.power
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrent: current => { dispatch({type: 'SET_CURRENT', current}) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);