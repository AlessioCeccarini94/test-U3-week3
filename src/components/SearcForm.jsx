import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
    navigate("/search?q=" + query)
    setQuery("")
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex gap-2 p-2">
      <Form.Control
        type="text"
        className="form-control"
        placeholder="Cerca brano, artista..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button className="btn btn-dark border-danger" type="submit">
        Cerca
      </Button>
    </Form>
  )
}

export default SearchForm
