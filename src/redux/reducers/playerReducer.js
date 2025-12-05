import { PLAYER } from "../actions/actions"

const initialState = {
  content: [],
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
  }
}
export default playerReducer
