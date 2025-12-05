import { Col, Row } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"

const Favorites = () => {
  const favorites = useSelector((state) => {
    return state.favorites.content
  })
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul className="list-group mx-3">
          {favorites &&
            favorites.map((favorite) => {
              return (
                <li
                  key={favorite.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <Col>
                    <img src={favorite.album.cover} alt="" />
                  </Col>
                  <Col>{favorite.title}</Col>
                  <Col>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FAVORITE",
                          payload: favorite.id,
                        })
                      }}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </Col>
                  <button className="btn btn-primary">play</button>
                </li>
              )
            })}
        </ul>
      </Col>
    </Row>
  )
}

export default Favorites
