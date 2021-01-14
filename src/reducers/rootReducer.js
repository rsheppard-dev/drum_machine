const initState = {
    bankA: [
        {
            key: 'Q',
            name: 'Heater-1',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3`
        },
        {
            key: 'W',
            name: 'Heater-2',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3`
        },
        {
            key: 'E',
            name: 'Heater-3',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3`
        },
        {
            key: 'A',
            name: 'Heater-4',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3`
        },
        {
            key: 'S',
            name: 'Clap',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3`
        },
        {
            key: 'D',
            name: 'Open-HH',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3`
        },
        {
            key: 'Z',
            name: `Kick-n'-Hat`,
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3`
        },
        {
            key: 'X',
            name: 'Kick',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3`
        },
        {
            key: 'C',
            name: 'Closed-HH',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3`
        }
    ],
    bankB: [
        {
            key: 'Q',
            name: 'Chord-1',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3`
        },
        {
            key: 'W',
            name: 'Chord-2',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3`
        },
        {
            key: 'E',
            name: 'Chord-3',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3`
        },
        {
            key: 'A',
            name: 'Shaker',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3`
        },
        {
            key: 'S',
            name: 'Open-HH',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3`
        },
        {
            key: 'D',
            name: 'Closed-HH',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3`
        },
        {
            key: 'Z',
            name: `Punchy-Kick`,
            sound: `https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3`
        },
        {
            key: 'X',
            name: 'Side-Stick',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3`
        },
        {
            key: 'C',
            name: 'Snare',
            sound: `https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3`
        }
    ],
    activeKit: 'Bank A',
    currentPad: undefined,
    volume: 80,
    power: true
};


const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_VOLUME':
            return {
                ...state,
                volume: action.volume
            }
        case 'SET_BANK':
            return {
                ...state,
                activeKit: action.bank
            }
        case 'SET_CURRENT':
            return {
                ...state,
                currentPad: action.current
            }
        case 'SET_POWER':
            return {
                ...state,
                power: action.power
            }
        default:
            return state;
    }
}

export default rootReducer;