import { Container, Row, Spinner } from "react-bootstrap"
import SingleSong from "./SingleSong"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchSongsAction } from "../redux/actions/actions"

const MusicList = ({ params }) => {
  const dispatch = useDispatch()
  const songs = useSelector((state) => state.songs.songs[params])

  useEffect(() => {
    dispatch(fetchSongsAction(params))
  }, [dispatch, params])

  return (
    <Container>
      <h3>Canzoni per: {params.toUpperCase()}</h3>
      <Row className="row-cols-3 row-cols-md-4 row-cols-lg-5 flex-nowrap overflow-scroll align-items-center">
        {songs &&
          songs.map((song) => {
            return <SingleSong key={song.id} song={song} />
          })}
      </Row>
    </Container>
  )
}
export default MusicList
