import { configureStore } from "@reduxjs/toolkit"
import musicReducer from "../reducers/musicReducer"
import favoriteReducer from "../reducers/favoritesReducer"

const store = configureStore({
  reducer: {
    songs: musicReducer,
    favorites: favoriteReducer,
  },
})
export default store
