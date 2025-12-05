import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar"
import MusicList from "./components/MusicList"
import Favorites from "./components/Favorites"
import SearchPage from "./components/SearchPage"
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./redux/store"
import MySidebar from "./components/MySidebar"
import { Container, Row, Col } from "react-bootstrap"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid className="p-0">
          <Row>
            <Col className="d-none d-md-block vh-100 bg-dark col col-md-2 vh-100">
              <MySidebar />
            </Col>
            <Col className=" col col-md-10">
              <MyNavbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <MusicList params="pupo" />
                      <MusicList params="fausto leali" />
                      <MusicList params="michael jackson" />
                    </div>
                  }
                />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<h1>404</h1>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
