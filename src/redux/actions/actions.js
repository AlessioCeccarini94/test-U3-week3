export const SONGS_FETCH = "SONGS_FETCH"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const fetchSongsAction = (params) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${params}`
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error")
        }
      })
      .then((data) => {
        console.log(data)
        dispatch({
          type: SONGS_FETCH,
          payload: {
            key: params,
            list: data.data,
          },
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const addFavoriteAction = (song) => {
  return {
    type: ADD_FAVORITE,
    payload: song,
  }
}

export const removeFavoriteAction = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  }
}
