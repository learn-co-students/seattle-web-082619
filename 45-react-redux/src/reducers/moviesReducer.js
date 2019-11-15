const initialState = {
  films: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SAVE MOVIES':
      return {
        films: action.payload
      }
    default: 
      return state
  }
}

export default reducer;