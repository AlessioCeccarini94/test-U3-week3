import { Card, Col, Button } from "react-bootstrap"
import { FaHeart } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addFavoriteAction } from "../redux/actions/actions"
import { useSelector } from "react-redux"
import Player from "./Player"

const SingleSong = ({ song }) => {
  const dispatch = useDispatch()
  useSelector((state) => state.favorites)
  return (
    <Col className="my-3 h-100">
      <Card className="h-100 bg-dark text-light border-0">
        <Card.Img variant="top" src={song.album.cover} />
        <Card.Body className="d-flex flex-column justify-content-between p-0 text-center my-2">
          <Card.Title className="text-truncate"> {song.title}</Card.Title>
          <Card.Text> {song.artist.name}</Card.Text>
          <div className="d-flex  align-items-center justify-content-center">
            <FaHeart
              className={song.isFavorite ? "text-danger" : "text-light"}
              role="button"
              onClick={() => {
                dispatch(addFavoriteAction(song))
                song.isFavorite = !song.isFavorite
              }}
            />
            <Player previewUrl={song.preview} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleSong
