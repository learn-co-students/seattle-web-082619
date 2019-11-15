import castor from '../assets/castor.jpg';
import mcdunnough from '../assets/mcdunnough.jpg';
import memphis from '../assets/memphis.jpg';
import poe from '../assets/poe.jpg'

const initialState = {
  chars: {
    1: {
      id: 1,
      name: "Castor Troy",
      votes: 0,
      img: castor
    }, 
    2: {
      id: 2,
      name: "H.I. McDunnough",
      votes: 0,
      img: mcdunnough
    },
    3: {
      id: 3,
      name: "Memphis Raines",
      votes: 0,
      img: memphis
    },
    4: {
      id: 4,
      name: "Cameron Poe",
      votes: 0,
      img: poe
    }
  }
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'INCREASE VOTE': 
      return {
        ...state,
        chars: {
          ...state.chars,
          [action.payload]: {
            ...state.chars[action.payload],
            votes: state.chars[action.payload]['votes'] + 1
          }
        }
      }
    case 'DECREASE VOTE': 
      return {
        ...state,
        chars: {
          ...state.chars,
          [action.payload]: {
            ...state.chars[action.payload],
            votes: state.chars[action.payload]['votes'] - 1
          }
        }
      }
    default:
      return state;
  }
}

// increaseVote = (cageId) => {
  // this.setState({
  //   chars: {
  //     ...this.props.chars,
  //     [cageId]: {
  //       ...this.props.chars[cageId],
  //       votes: this.props.chars[cageId]['votes'] + 1
  //     }
  //   }
  // })
// }

// decreaseVote = (cageId) => {
//   this.setState({
//     chars: {
//       ...this.props.chars,
//       [cageId]: {
//         ...this.props.chars[cageId],
//         votes: this.props.chars[cageId]['votes'] - 1
//       }
//     }
//   })
// }

export default reducer;