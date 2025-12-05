import { SONGS_FETCH } from "../actions/actions"

const initialState = {
  songs: {},
  loading: false,
}
const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SONGS_FETCH:
      return {
        ...state,
        songs: {
          ...state.songs,
          [action.payload.key]: action.payload.list,
        },
      }
    default:
      return state
  }
}

export default songsReducer
