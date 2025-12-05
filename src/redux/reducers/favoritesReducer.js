import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/actions"

const initialState = {
  content: [],
  isFavorite: false,
}
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        content: state.content.filter(
          (favorite) => favorite.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export default favoriteReducer
