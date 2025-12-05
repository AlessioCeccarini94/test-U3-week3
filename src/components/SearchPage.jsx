import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchSongsAction } from "../redux/actions/actions"
import { Container, Row } from "react-bootstrap"
import SingleSong from "./SingleSong"
import { useSearchParams } from "react-router-dom"

const SearchPage = () => {
  const dispatch = useDispatch()
  const [params] = useSearchParams()
  const query = params.get("q")

  const songs = useSelector((state) => state.songs.songs[query])

  useEffect(() => {
    if (query) dispatch(fetchSongsAction(query))
  }, [query, dispatch])

  return (
    <Container>
      <h3>Risultati per: {query}</h3>
      <Row className="row-cols-3 row-cols-md-4 row-cols-lg-5">
        {songs && songs.map((song) => <SingleSong key={song.id} song={song} />)}
      </Row>
    </Container>
  )
}

export default SearchPage
